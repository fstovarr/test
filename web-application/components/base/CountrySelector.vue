<template>
  <v-autocomplete
    :value="value"
    @input="emitInput"
    :items="countryList"
    outlined
    item-text="name"
    item-value="location_id"
    :label="$t('auth.country')"
    return-object
  ></v-autocomplete>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
    },
  },
  data() {
    return {
      country: undefined,
      countryList: [],
    };
  },
  mounted() {
    this.loadCountryList();
  },
  methods: {
    emitInput(ev) {
      this.$emit("input", ev);
    },
    async loadCountryList() {
      try {
        const countries = await this.$axios.$get("/locations");
        this.countryList = countries;
      } catch (error) {
        console.log("Error loading the countries");
      }
    },
  },
};
</script>
<style scoped></style>
