<template>
  <div id="map" ref="mapElement" />
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  methods: {
    initMap() {
      const map = new L.Map(this.$refs['mapElement']);
      var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      //var osmUrl='https://maps.geoapify.com/v1/styles/positron/style.json?apiKey=445dd7ad940b4796ba50cee52b3c0e7e';
      var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
      //map.attributionControl.setPrefix('').addAttribution('Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>');
      var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 19, attribution: osmAttrib});
      /*var gl = L.mapboxGL({
        style: 'https://maps.geoapify.com/v1/styles/positron/style.json?apiKey=YOUR_API_KEY',
        accessToken: 'no-token'
      }).addTo(map);*/
      map.setView(new L.LatLng(47.4416606,19.0921734),10);
      map.addLayer(osm);

      var markerIcon = L.icon({
          iconUrl: '/map_marker.svg',
          iconSize:     [40, 40], // size of the icon
          iconAnchor:   [20, 20]
      });

      var marker = L.marker([47.4416606,19.0921734], {icon: markerIcon}).addTo(map);
      //marker.bindPopup("<b>Botanischer Garten</b><br>is here").openPopup();
    }
  },

  mounted () {
    this.initMap()
  }
}

</script>

<style lang="scss">
#map {
  //margin-left: 20px;
  width: 100%;
  height: 100%;
}
</style>
