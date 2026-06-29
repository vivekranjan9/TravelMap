// ===============================
// TravelMap v2.0
// Google Earth Style
// ===============================

// Paste YOUR token below
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYWM2YzdhMi1kYzFkLTRjYmUtOTkyZC04NDE0OTVjOTFkYzYiLCJpZCI6NDUwNDk4LCJzdWIiOiJ2aXZla3JhbmphbjkiLCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidml2ZWtyYW5qYW45X2RlZmF1bHQiLCJpYXQiOjE3ODI3NTkxNjZ9.ES-p0StL7k--QZVUJOq2sbWZHZX8734Et63SmBels0M";

// Create Viewer
const viewer = new Cesium.Viewer("cesiumContainer", {

    animation: false,

    timeline: false,

    sceneModePicker: false,

    homeButton: false,

    fullscreenButton: true,

    geocoder: false,

    navigationHelpButton: false,

    baseLayerPicker: true,

    terrain: Cesium.Terrain.fromWorldTerrain()

});

// Hide Cesium Credits (we'll add proper attribution elsewhere later)
viewer.cesiumWidget.creditContainer.style.display = "none";

// Start from space
viewer.camera.setView({

    destination: Cesium.Cartesian3.fromDegrees(

        0,
        20,
        35000000

    )

});

// After 3 seconds fly to India
setTimeout(() => {

    viewer.camera.flyTo({

        destination: Cesium.Cartesian3.fromDegrees(

            78.9629,

            20.5937,

            6000000

        ),

        duration: 5

    });

}, 3000);