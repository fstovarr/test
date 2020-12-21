<template>
  <div>
    <profile-picture
      class="mb-5"
      :src="company.picture || require('~/assets/img/default-company.png')"
    ></profile-picture>
    <h4>{{ company.name }}</h4>
    <p>{{ company.description }}</p>
    <v-divider></v-divider>
    <v-row class="my-10 mx-3 d-flex flex-column" align="center">
      <h5 class="my-3">{{ $t("company.reputation") }}</h5>
      <reputation :value="company.reputation_avg"></reputation>
    </v-row>
    <v-row class="mx-3 my-10" align="center" justify="center">
      <h5 class="my-3">{{ $t("company.some_team_members") }}</h5>
      <preview-team-members
        :members="company.team_members"
      ></preview-team-members>
    </v-row>
    <v-divider></v-divider>
    <p class="muted-text">{{ $t("company.join_date") }} {{ formattedDate }}</p>
  </div>
</template>
<script>
import Reputation from "@/components/company/Reputation";
import ProfilePicture from "@/components/company/ProfilePicture";
import PreviewTeamMembers from "@/components/company/PreviewTeamMembers";

export default {
  props: {
    company: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { Reputation, ProfilePicture, PreviewTeamMembers },
  created() {},
  computed: {
    formattedDate() {
      return this.$moment(new Date("2020-12-21T01:13:45"))
        .locale(this.$store.$i18n.locale)
        .format("LL");
    },
  },
};
</script>
<style scoped>
.muted-text {
  color: #909090;
  font-size: 0.7rem;
}
</style>
