import Vue from "vue";

/**
 * Global external components
 */
import { ValidationObserver } from "vee-validate";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
// import vueCountryRegionSelect from "vue-country-region-select";

/*
 * Global custom components
 */
import InputText from "@/components/InputText";

// Vue.use(vueCountryRegionSelect);
Vue.use(PerfectScrollbar);

Vue.component("validation-observer", ValidationObserver);
Vue.component("input-text", InputText);

/**
 *  Global functions
 */
export default ({ $store }, inject) => {};
