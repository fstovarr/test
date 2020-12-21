<template>
  <v-col :md="md" align="center">
    <v-card class="pa-5" elevation="5">
      <slot></slot>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    md: {
      type: Number,
    },
  },
};
</script>
<style scoped></style>
