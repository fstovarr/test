<template>
  <div class="d-flex flex-column reputation-container mt-5">
    <v-tooltip max-width="300" bottom>
      <template v-slot:activator="{ on, attrs }">
        <div>
          <v-icon v-bind="attrs" v-on="on" x-large>mdi-blur</v-icon>
          <div class="text-medium mt-2">{{ valueFormatted }}</div>
        </div>
      </template>
      <span>{{ $t("company.reputation_explanation") }}</span>
    </v-tooltip>
  </div>
</template>
<script>
// import { mdiBlur } from '@mdi/js';
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    valueFormatted() {
      return (Math.round(this.value * 100) / 100).toFixed(2);
    },
  },
};
</script>
<style scoped>
.text-medium {
  font-size: 0.9rem;
}
</style>
