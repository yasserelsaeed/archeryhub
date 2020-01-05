// Initialize and add the map
function initMap(){
  // your location
  const loc = { lat: 30.0004787, lng: 31.0481126 };
  // centered map on location

  const map = new google.maps.Map(document.querySelector('.map'),
  {
    zoom: 14,
    center: loc
  });


// the marker, positioned at location

const marker = new google.maps.Marker({ position: loc, map: map});

const loc2 = { lat: 30.006549, lng: 31.505759 };
// centered map on location

const map2 = new google.maps.Map(document.querySelector('.map2'),
{
  zoom: 14,
  center: loc2
});


// the marker, positioned at location

const marker2 = new google.maps.Marker({ position: loc2, map: map2});

}

