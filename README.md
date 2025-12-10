# ShelfSignals

ShelfSignals is a system-agnostic analytics framework for extracting structure,
patterns, and insights from collection inventories. It is designed for research
libraries, archives, and any environment where catalog metadata and numbering
systems contain implicit signals about provenance, organization, or workflow
history.

ShelfSignals ingests catalog records, normalizes metadata, and uses configurable
analysis modules to detect patterns in numbering sequences, item groupings,
descriptive fields, and other latent structures. The project is entirely
collection-neutral and adaptable to future datasets.

---

## Features

- **Metadata Harvesting**  
  Connectors for scraping, exporting, or ingesting catalog data (API, CSV,
  HTML/DOM extraction, etc.).

- **Normalization Layer**  
  Standardizes fields, numbering systems, identifiers, and formats across
  heterogeneous sources.

- **Pattern Analysis Engine**  
  Modules for:
  - sequence detection  
  - call number pattern clustering  
  - accession/cutter analysis  
  - temporal or spatial grouping  
  - anomaly detection  

- **Visualization Tools**  
  Heatmaps, sequence plots, cluster maps, and lineage timelines.

- **Export & Reporting**  
  Configurable output formats (CSV, JSON, Markdown reports, visual dashboards).

---

## Goals

ShelfSignals aims to:

1. Reveal hidden organizational structure in collection metadata.  
2. Identify sequential numbering patterns and anomalies.  
3. Provide a reusable toolkit for ongoing research and cross-collection studies.  
4. Support data preparation for external reporting or downstream machine-learning tasks.

---

## Web Interfaces

ShelfSignals provides three web interfaces for exploring the Sekula Library collection:

### Production Site (`/`)
- **Location**: `docs/index.html`
- **Data Source**: `docs/data/sekula_inventory.json` (CSV-compatible format)
- **Status**: Stable, current production interface
- **Access**: Deployed at the repository's GitHub Pages root URL

The production site provides a mature interface with CSV-based data loading and legacy controls. It includes shelf visualization, cluster mapping, and detailed item views.

### Responsive View (`/responsive.html`)
- **Location**: `docs/responsive.html`
- **Data Source**: `docs/data/sekula_inventory.json` (CSV-compatible format)
- **Status**: Mobile-first responsive layout
- **Access**: Available at `/responsive.html` relative to the repository URL

The responsive view provides a fully responsive interface that adapts to different screen sizes:
- **Responsive breakpoints**: Adapts at <480px (mobile), 768px (tablet), 1024px (desktop), and 1440px+ (large screens)
- **Touch-friendly design**: Larger tap targets (44-48px minimum) and appropriate spacing for mobile devices
- **Accessibility features**:
  - Full keyboard navigation support with visible focus states
  - ARIA roles and labels for screen readers
  - Skip links for better navigation
  - Reduced motion support via `@media (prefers-reduced-motion)`
  - High contrast mode compatibility
- **Book size explanation**: Visual legend explaining that spine height represents the number of thematic signals (themes) in each item's metadata
  - No signals: 40px height
  - 1-2 signals: 56px height (small)
  - 3-4 signals: 72px height (medium)
  - 5+ signals: 88px height (large)
- **Catalog links**: Uses centralized URL builder that prioritizes `record_url` field when available

### Preview Environment (`/preview/`)
- **Location**: `docs/preview/index.html`
- **Data Source**: `docs/data/sekula_index.json` (JSON-native format from Primo API)
- **Status**: Experimental, modular architecture
- **Access**: Available at `/preview/` relative to the repository URL

The preview environment showcases a modernized, modular architecture with:
- **Modular JavaScript utilities** in `docs/js/`:
  - `signals.js` - Centralized signals (theme) registry and keyword matching
  - `lc.js` - LC call-number parser extracting class, number, and sorting keys
  - `colors.js` - Unified color logic with colorblind-friendly palettes and localStorage persistence
  - `search.js` - Debounced search state with match computation across multiple fields
  - `year.js` - Year normalization utility for messy date strings
  - `catalog.js` - Centralized catalog URL builder with fallback logic
- **Enhanced features**:
  - JSON-based data loading from Primo API harvests
  - Improved accessibility (ARIA roles, keyboard navigation, focus management)
  - Search highlighting and explicit empty states
  - Enhanced detail panel with LC ranges, signal counts, and catalog links
  - Color palette selector with accessibility options
  - Real-time search with match counts and field-level feedback

The preview environment serves as a testing ground for new features before they are promoted to production.

### Catalog Link Construction

All three interfaces use a consistent approach to building catalog links:

1. **Priority 1**: Use `record_url` field if available (contains full discovery URL from data)
2. **Priority 2**: Build Primo permalink from `alma_mms` ID using format:
   ```
   https://clark.primo.exlibrisgroup.com/permalink/01CLARKART_INST/1gqonkq/{alma_mms}
   ```
3. **Fallback**: Return null if no identifiers available

This ensures that catalog links always use the most appropriate URL format and provides a consistent experience across all views. The centralized utility is implemented in `docs/js/catalog.js` and can be easily tested and maintained.

### Testing Catalog Links

To verify catalog links are working correctly:

1. **Manual Testing**: Click on any item in any view and check that the "View in Catalog" link:
   - Uses the correct URL format (discovery URL or Primo permalink)
   - Opens the item detail page in the library catalog
   - Falls back gracefully when identifiers are missing

2. **Sample Test Cases**:
   - Items with `record_url`: Should use the full discovery URL
   - Items with only `alma_mms`: Should build Primo permalink
   - Items without identifiers: Should not show catalog link

3. **Browser Console**: Check for any errors in the browser console when clicking catalog links

---

## Repository Structure (proposed)


