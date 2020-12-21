<template>
  <div>
    <h3 class="mb-4">{{ $t("company.your_offers") }}</h3>
    <v-row v-if="jobOffers && jobOffers.length > 0">
      <offer
        v-for="(offer, key) in jobOffers"
        :key="`job_offer_${key}`"
        :offer="offer"
      >
      </offer>
    </v-row>
    <div class="ma-8" v-else>
      <span class="text-small">{{ $t("common.not_found") }}</span>
    </div>
  </div>
</template>
<script>
import Offer from "@/components/company/Offer";
export default {
  components: { Offer },
  props: {
    "job-offers": {
      type: Array,
    },
  },
};
</script>
<style scoped>
.text-small {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>
