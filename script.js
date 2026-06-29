// ===============================
// TravelMap v2.0
// ===============================

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYWM2YzdhMi1kYzFkLTRjYmUtOTkyZC04NDE0OTVjOTFkYzYiLCJpZCI6NDUwNDk4LCJzdWIiOiJ2aXZla3JhbmphbjkiLCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidml2ZWtyYW5qYW45X2RlZmF1bHQiLCJpYXQiOjE3ODI3NTkxNjZ9.ES-p0StL7k--QZVUJOq2sbWZHZX8734Et63SmBels0M";

// Create viewer with default globe
const viewer = new Cesium.Viewer("cesiumContainer", {
    terrain: Cesium.Terrain.fromWorldTerrain()
});

// Fly to Earth
viewer.camera.flyHome(0);