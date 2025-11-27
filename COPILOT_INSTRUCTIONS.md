# Copilot Instructions for ShelfSignals

ShelfSignals is an adaptable toolkit for collection intelligence and metadata analysis, built to surface the “signals” hidden inside catalogs, archives, and inventory systems. It integrates closely with an external metadata standards library, which provides the descriptive standards and schemas that ShelfSignals should respect.

## How Copilot Should Behave

When suggesting code in this repository, Copilot should:

1. Prefer project metadata schemas  
   - Use existing project metadata types, field names, and enum values instead of inventing new ones.  
   - Align validation and normalization logic with those schemas.

2. Prioritize analysis primitives, not applications  
   - Focus on small, composable functions for: frequency scans, similarity scoring, metadata completeness checks, enrichment hooks, and reporting helpers.  
   - Avoid scaffolding generic CRUD apps, large frameworks, or full-stack frontends unless explicitly requested.

3. Keep modules small and composable  
   - Structure new logic as small, testable functions or modules that can be plugged into larger workflows.  
   - Avoid large, monolithic classes or modules that mix analysis, I/O, and presentation.

4. Respect experimental status  
   - Treat new ideas as experiments first: propose them as standalone helpers or notebook-oriented utilities before “hardening” them into core modules.  
   - Use clear names and minimal abstractions so they are easy to refactor later.

5. Avoid guessing about metadata semantics  
   - If field meaning or mapping to the underlying standards library is unclear, prefer `TODO` comments and clear notes instead of silent assumptions.  
   - Reuse existing patterns where similar mappings already exist.

6. Favor clarity over cleverness  
   - Write straightforward code with descriptive names, simple control flow, and minimal indirection.  
   - Prefer explicit configuration and clear data shapes over magic conventions.

Use these guidelines as the default “prompt” when Copilot operates in this repository so that suggestions reinforce ShelfSignals’ objectives and its integration with the underlying standards library.
