// ===============================
// TravelMap v2.0
// ===============================

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmM2ViM2QxNC1lYjY2LTRiM2YtOWQ1Ni1jMzRkNDkzMGU1OGYiLCJpZCI6NDUwNDk4LCJzdWIiOiJ2aXZla3JhbmphbjkiLCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidml2ZWtyYW5qYW45X2RlZmF1bHQiLCJpYXQiOjE3ODI3NTk4MDR9.VTGTfFHVnjPfpDmI2yLCQyiRyHU_Et5-s1Nf51Mg06U";

// Create viewer with default globe
const viewer = new Cesium.Viewer("cesiumContainer", {
    terrain: Cesium.Terrain.fromWorldTerrain()
});

// Fly to Earth
viewer.camera.flyHome(0);