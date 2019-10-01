// ==UserScript==
// @name        Finnish terrain map to flow (Leaflet version)
// @namespace   ftm_flow
// @include     https://flow.polar.com/training/analysis/*
// @version     2
// @grant       none
// ==/UserScript==

// Map is created asynchronously, so we'll have to wait until it is created
function addCustomMap()
{
  if (lMap != null)
  {
      if (lMap.map != null)
      {
          clearTimeout(isMapreadyTimer);
          console.log("Leaflet map ready");

          var tileUrl = "http://tiles.kartat.kapsi.fi/peruskartta/{z}/{x}/{y}.png";

          var pkTl = L.tileLayer(tileUrl, {minZoom: LMapConstants.MIN_ZOOM, maxZoom: LMapConstants.MAX_ZOOM, zoomOffset: 0, id: "pk-v11", tileSize: 256});

          lMap.map.addLayer(pkTl);
      }
  }
}
var isMapreadyTimer;

(function() {
    'use strict';
    isMapreadyTimer = setInterval(addCustomMap, 1000);
    var mapCanvasLeaflet = document.getElementById("mapCanvasLeaflet").style.height = "500px";
})();
