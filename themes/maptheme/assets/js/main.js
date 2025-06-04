document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
  });

  var bounds = [[0,0], [800,1200]];
  L.imageOverlay('https://placehold.co/1200x800.png?text=Map', bounds).addTo(map);
  map.fitBounds(bounds);

  var locations = [
    { name: 'Location 1', coords: [200,300], description: 'Description for Location 1' },
    { name: 'Location 2', coords: [600,900], description: 'Description for Location 2' }
  ];

  var info = document.getElementById('info-layer');
  var infoContent = document.querySelector('#info-layer .content');
  document.querySelector('#info-layer .close').addEventListener('click', function() {
    info.classList.remove('active');
  });

  locations.forEach(function(loc) {
    var marker = L.marker(loc.coords).addTo(map);
    marker.on('click', function() {
      map.setView(loc.coords, 1);
      infoContent.innerHTML = '<h2>' + loc.name + '</h2><p>' + loc.description + '</p>';
      info.classList.add('active');
    });
  });
});
