<template>
  <div>
    <h3 class="mb-4">{{ $t("company.your_offers") }}</h3>
    <v-row>
      <offer
        v-for="(offer, key) in jobOffers"
        :key="`job_offer_${key}`"
        :offer="offer"
      >
      </offer>
    </v-row>
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
