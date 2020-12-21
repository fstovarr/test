<template>
  <v-col md="6" align="start">
    <v-hover v-slot="{ hover }">
      <v-card :elevation="hover ? 12 : 2" @click="openOffer">
        <v-img
          max-height="100"
          :src="offer.cover || require('~/assets/img/default-cover.jpg')"
        />
        <v-card-subtitle>
          <p class="main-text mb-0">{{ offer.objective }}</p>
          <p class="mt-0">
            <span class="text-muted">{{ $t(`common.${offer.type}`) }}</span> ·
            <span class="text-muted">{{
              offer.opened ? $t("common.open") : $t("common.closed")
            }}</span>
          </p>
        </v-card-subtitle>
      </v-card>
    </v-hover>
  </v-col>
</template>
<script>
export default {
  props: {
    offer: {
      type: Object,
    },
  },
  methods: {
    openOffer() {
      const url = `https://torre.co/jobs/${this.offer.job_offer_id}-${this.offer.slug}`;
      window.open(url, "_blank");
    },
  },
};
</script>
<style scoped>
.main-text {
  color: #cddc39;
}
.text-muted {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.8rem;
}
</style>
