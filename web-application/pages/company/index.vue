<template>
  <v-container
    ><v-row>
      <container :md="4">
        <company-summary :company="company"></company-summary>
      </container>
      <container :md="8">
        <offers :job-offers="offers"></offers>
      </container>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Container from "@/components/company/Container";
import Offers from "@/components/company/Offers";
import TeamMembers from "@/components/company/TeamMembers";
import CompanySummary from "@/components/company/CompanySummary";

export default {
  layout: "companies",
  components: { Container, Offers, TeamMembers, CompanySummary },
  data: () => ({}),
  async created() {
    await this.getCompanies();
  },
  computed: mapState({
    company: (state) => (state.companies || {}).company,
    offers: (state) => (state.offers || {}).offers,
    members: (state) => (state.members || {}).members,
  }),
  methods: {
    ...mapActions({
      getCompanies: "companies/fetch",
    }),
  },
};
</script>
<style scoped>
.logo {
  border-radius: 50%;
}
.login-container {
  max-width: 600px;
  min-width: 400px;
  border-radius: 5px;
}
.login-btn-title {
  font-size: 14px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
}
</style>
