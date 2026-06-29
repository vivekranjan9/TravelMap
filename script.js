// ===============================
// TravelMap v2.0
// ===============================

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYWM2YzdhMi1kYzFkLTRjYmUtOTkyZC04NDE0OTVjOTFkYzYiLCJpZCI6NDUwNDk4LCJzdWIiOiJ2aXZla3JhbmphbjkiLCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidml2ZWtyYW5qYW45X2RlZmF1bHQiLCJpYXQiOjE3ODI3NTkxNjZ9.ES-p0StL7k--QZVUJOq2sbWZHZX8734Et63SmBels0M";

// Create the viewer
const viewer = new Cesium.Viewer("cesiumContainer", {
    animation: false,
    timeline: false,
    baseLayerPicker: true,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    fullscreenButton: true,
    terrain: Cesium.Terrain.fromWorldTerrain()
});

// Fly directly to India
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
        78.9629,
        20.5937,
        15000000
    ),
    duration: 3
});