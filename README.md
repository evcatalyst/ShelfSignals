# ShelfSignals

ShelfSignals is an adaptable toolkit for collection intelligence and metadata analysis built to surface the "signals" hidden inside catalogs, archives, and inventory systems.

## Objective

ShelfSignals focuses on three complementary goals:

1. Consolidate collection metadata from disparate sources and normalize it into a Clark & Sekula-compatible structure.
2. Provide lightweight analysis primitives—frequency scans, similarity scoring, and enrichment hooks—that help curators see what is under-described or over-represented.
3. Act as a proving ground for experimental cataloging ideas before they migrate into production systems.

## Clark & Sekula Library Integration

The Clark & Sekula library supplies our descriptive standards layer. ShelfSignals consumes its schemas to:

- validate ingest pipelines before data is analyzed;
- generate derived facets that the analysis modules can share;
- keep annotation output in sync with Clark & Sekula naming conventions so feedback can flow downstream.

When building new modules, start from the Clark & Sekula data classes rather than inventing bespoke field names. This keeps the feedback loop short and the metadata portable.

## Current Status

ShelfSignals is in active prototyping. Expect rapid iteration around:

- data adapters for additional Clark & Sekula collections;
- enrichment connectors (e.g., controlled vocabulary lookups, computer vision);
- reporting notebooks that visualize the strongest shelf-level signals.

Your contributions, experiments, and critical notes on how ShelfSignals supports Clark & Sekula objectives are encouraged.
