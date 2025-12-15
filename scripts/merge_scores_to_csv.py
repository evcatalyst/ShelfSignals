"""
merge_scores_to_csv.py
~~~~~~~~~~~~~~~~~~~~~~~

Merge photo likelihood scores back into the main dataset and export as CSV.

Usage:
    python scripts/merge_scores_to_csv.py \
        --input docs/data/sekula_index.json \
        --scores docs/data/photo_scored.jsonl \
        --output docs/data/sekula_index_enriched.csv
"""

import argparse
import csv
import json


def main():
    parser = argparse.ArgumentParser(
        description="Merge photo scores into main dataset and export CSV"
    )
    parser.add_argument(
        "--input",
        required=True,
        help="Input JSON file with original records",
    )
    parser.add_argument(
        "--scores",
        required=True,
        help="Input JSONL file with photo scores",
    )
    parser.add_argument(
        "--output",
        required=True,
        help="Output CSV file",
    )
    args = parser.parse_args()

    # Load scores into lookup dict
    print(f"[merge] Loading scores from {args.scores}...")
    scores = {}
    with open(args.scores, "r", encoding="utf-8") as f:
        for line in f:
            if line.strip():
                record = json.loads(line)
                scores[record["id"]] = record

    print(f"[merge] Loaded {len(scores)} scored records")

    # Load original records
    print(f"[merge] Loading records from {args.input}...")
    with open(args.input, "r", encoding="utf-8") as f:
        records = json.load(f)

    print(f"[merge] Loaded {len(records)} records")

    # Determine CSV fieldnames (original + photo score fields)
    base_fields = list(records[0].keys()) if records else []
    photo_fields = [
        "photo_insert_score",
        "photo_insert_bucket",
        "photo_insert_reasoning",
        "photo_scoring_provider",
        "photo_scoring_model",
        "photo_scoring_prompt_version",
    ]
    fieldnames = base_fields + photo_fields

    # Write CSV
    print(f"[merge] Writing enriched CSV to {args.output}...")
    matched = 0
    
    with open(args.output, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for record in records:
            row = dict(record)
            record_id = record["id"]

            # Merge photo scores if available
            if record_id in scores:
                scored = scores[record_id]
                row["photo_insert_score"] = scored.get("photo_insert_score", "")
                row["photo_insert_bucket"] = scored.get("photo_insert_bucket", "")
                row["photo_insert_reasoning"] = scored.get("photo_insert_reasoning", "")
                
                metadata = scored.get("scoring_metadata", {})
                row["photo_scoring_provider"] = metadata.get("provider", "")
                row["photo_scoring_model"] = metadata.get("model", "")
                row["photo_scoring_prompt_version"] = metadata.get("prompt_version", "")
                matched += 1
            else:
                # No score available
                for field in photo_fields:
                    row[field] = ""

            # Flatten list fields for CSV
            for key, value in row.items():
                if isinstance(value, list):
                    row[key] = " | ".join(str(v) for v in value)
                elif isinstance(value, dict):
                    row[key] = json.dumps(value, ensure_ascii=False)

            writer.writerow(row)

    print(f"[merge] Done! Matched {matched}/{len(records)} records with scores")


if __name__ == "__main__":
    main()
