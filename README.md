# leaflet-0.8-dev-protomaps

This repo is a PoC that you can display protomaps basetiles with protomaps leaflet (a full canvas renderer) even on a 10 year old leaflet version (leaflet 0.8-dev).

Two things here are patched: 

- leaflet, as protomaps uses some utility functions for e.g. loading close tiles first
- protomaps, i.e. `renderTile` and `rerenderTile` functions

It does work, really well and fast! I couldn't see any bugs or similar.

## Note 
On old Leaflet versions before 1.0, I only found two ways for using vector tiles: 

1. https://github.com/SpatialServer/Leaflet.MapboxVectorTile/issues/89
2. This repo with protomaps.

The latter works better and without bugs on the tile edges!
