var iconArt = L.icon({
    iconUrl: './assets/icon-location.svg',
    iconSize: [40]
})

var map = L.map(document.getElementById('map'),{
    center:[41.48139906932867, -71.3103637719527],
    zoom: 15
});

 var basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 });
 basemap.addTo(map);

 var earthQuakeMarker = L.marker([41.48139906932867, -71.3103637719527],{
     title: 'Modern Art Galery',
     icon: iconArt
 });

 earthQuakeMarker.bindPopup("The Modern Art Gallery is free to all visitors and open seven days a week\n" +
     "from 8am to 9pm. Find us at 99 King Street, Newport, USA.").addTo(map)


