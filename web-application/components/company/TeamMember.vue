<template>
  <div>
    <profile-picture :src="teamMember.picture"></profile-picture>
    <h4>{{ teamMember.name }}</h4>
    <a
      :href="`https://bio.torre.co/en/${teamMember.username}`"
      target="_blank"
      >{{ $t("company.link_bio") }}</a
    >
  </div>
</template>
<script>
import ProfilePicture from "@/components/company/ProfilePicture";
export default {
  components: { ProfilePicture },
  props: {
    teamMember: {
      type: Object,
    },
  },
};
</script>
