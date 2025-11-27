# ShelfSignals

ShelfSignals is an adaptable toolkit for collection intelligence and metadata analysis built to surface the "signals" hidden inside catalogs, archives, and inventory systems.

## Objective

ShelfSignals focuses on three complementary goals:

1. Consolidate collection metadata from disparate sources and normalize it into a shared, standards-based structure.
2. Provide lightweight analysis primitives—frequency scans, similarity scoring, and enrichment hooks—that help curators see what is under-described or over-represented.
3. Act as a proving ground for experimental cataloging ideas before they migrate into production systems.

## Metadata Standards Integration

An external metadata standards library supplies our descriptive standards layer. ShelfSignals consumes its schemas to:

- validate ingest pipelines before data is analyzed;
- generate derived facets that the analysis modules can share;
- keep annotation output in sync with established naming conventions so feedback can flow downstream.

When building new modules, start from the shared data classes defined in that standards library rather than inventing bespoke field names. This keeps the feedback loop short and the metadata portable.

## Current Status

ShelfSignals is in active prototyping. Expect rapid iteration around:

- data adapters for additional collections that use the same standards;
- enrichment connectors (e.g., controlled vocabulary lookups, computer vision);
- reporting notebooks that visualize the strongest shelf-level signals.

Your contributions, experiments, and critical notes on how ShelfSignals supports ShelfSignals’ collection-intelligence objectives are encouraged.

## Copilot Instructions

When configuring GitHub Copilot (or any AI pair programmer) keep its system prompt tightly scoped:

1. Emphasize that ShelfSignals code should defer to the shared metadata schemas used by the project for type names, enum values, and validation rules.
2. Describe the project objective—surface shelf-level signals from heterogeneous catalogs—so Copilot proposes analysis helpers rather than generic CRUD flows.
3. Note that analysis modules are meant to be small, composable primitives and that speculative features should land in notebooks first.

These reminders help Copilot generate suggestions that reinforce the library integration instead of drifting toward unrelated application scaffolding.
