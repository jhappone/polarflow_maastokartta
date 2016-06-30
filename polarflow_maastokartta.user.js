// ==UserScript==
// @name        Adds custom map to Polar Flow
// @namespace   just_a_random_namespace
// @include     https://flow.polar.com/training/analysis/*
// @version     1
// @grant       none
// ==/UserScript==

// Map is created asynchronously, so we'll have to wait until it is created
function addCustomMap()
{
  if ($.fn.mapCanvas.map != null)
  {
    clearTimeout(isMapreadyTimer);
    console.log("GM Start");

    var peruskarttaTypeOptions = {
            getTileUrl: function(a,b){
                var query = 'http://tiles.kartat.kapsi.fi/peruskartta/' + b + '/' + a.x + '/' + a.y + '.jpg';
                return query;
            }, 
            tileSize: new google.maps.Size(256, 256),
            streetViewControl: false,
            maxZoom: 18,
            minZoom: 5,
            name: "Peruskartta"
        };    

    var peruskarttaMapType = new google.maps.ImageMapType(peruskarttaTypeOptions);

    $.fn.mapCanvas.map.mapTypes.set('Peruskartta', peruskarttaMapType);

    $.fn.mapCanvas.map.setMapTypeId('Peruskartta');
  }
}

var isMapreadyTimer = setInterval(addCustomMap, 1000);

