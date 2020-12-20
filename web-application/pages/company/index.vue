<template>
  <v-container
    ><v-row>
      <container>
        <company-summary></company-summary>
      </container>
      <container>
        <offers />
      </container>
      <container>
        <team-members />
      </container>
    </v-row>
  </v-container>
</template>

<script>
import Container from "@/components/company/Container";
import Offers from "@/components/company/Offers";
import TeamMembers from "@/components/company/TeamMembers";
import CompanySummary from "@/components/company/CompanySummary";

export default {
  layout: "companies",
  components: { Container, Offers, TeamMembers, CompanySummary },
  data: () => ({}),
  created() {},
  methods: {},
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
