var locations = [
  ['<b>Maria Dubyaga (aka Kraftaa)</b><br>Arlington, MA<br><a href="https://www.linkedin.com/in/maria-dubyaga-4aa1a73/" >Linkedin<a>', 42.4148,-71.1745579, 1]];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  /* Zoom level of your map */
  center: new google.maps.LatLng(40, -70.627464),
  /* coordinates for the center of your map Kansas City :)*/
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });
//or to use 'click'?
  google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
