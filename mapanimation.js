// This array contains the coordinates for all restaurant in San Miguel
  const polleriasStops = [
    [-77.10109958497418,-12.070158370134095],
    [-77.09064198216012,-12.070193755631436],
    [-77.09990546423694,-12.075014985783667],
    [-77.09842292775562,-12.075499691439205],
    [-77.09013478630472,-12.078332300251617],
    [-77.09112841578605,-12.075016819911724],
  ];
  const cevicheriasStops = [
    [-77.08971008132738,-12.074978922751356],
    [-77.08982418020852,-12.074750406367585],
    [-77.08832263136988,-12.077378234290663],
    [-77.08742042350451,-12.077536413339857],
    [-77.08758615223427,-12.078601584060664],
    [-77.08763973297093,-12.078764016131771],
  ];
  const otrosStops = [
    [-77.09245811624976,-12.075075923551196],
    [-77.09232859996976,-12.074801513680683],
    [-77.09213648415546,-12.075018930756002],
    [-77.09185786294289,-12.075819414309805],
    [-77.0910067126798,-12.078122448524724],
    [-77.09225358442141,-12.074069887990504],
  ];
  const zoneSanMiguel = [-77.09393028495859,-12.07509988486791];
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FmdW1pIiwiYSI6ImNsNm04dWQ4ZDBqYWYzaW1yc3htYTlvZG0ifQ.6tLhoLIfste6OIVfoJdlPg';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: zoneSanMiguel,
    zoom: 14,
  });
  var select = document.getElementById('selectRestaurant');
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
    var marker = new mapboxgl.Marker()
      .setLngLat(zoneSanMiguel)
      .addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  let stops;
  function startSearch(){
      switch (select.value) {
        case "polleria":
          console.log("entro a pollerias");
          stops= polleriasStops;
          break;
        case "cevicheria":
          stops= cevicheriasStops;
          console.log("entro a cevicheria");
            break;
        default:
          stops= otrosStops;
          console.log("entro a otros");

          break;
      }
    move(stops);
  } 
  function prueba(){
    console.log("hey");
  }
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    
    setTimeout(()=>{
        counter++;
        marker.setLngLat(stops[counter]);
        if(counter<stops.length-1){
            move();
        }else{
          counter=0;
          marker.setLngLat(zoneSanMiguel);
        }
    },500);
    
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  