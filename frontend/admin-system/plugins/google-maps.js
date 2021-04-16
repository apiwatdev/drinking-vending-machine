import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDRoREehLsRR0w-yHucSqsuAhttGPnwxW8",
    libraries: "places"
  }
});
