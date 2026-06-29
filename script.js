// Create the map

var map = L.map('map').setView([22.9734,78.6569],5);

// Satellite Layer

L.tileLayer(

'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',

{

attribution:'&copy; Esri'

}

).addTo(map);