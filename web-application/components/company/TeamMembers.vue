<template>
  <div>
    <team-member
      v-for="(member, index) in teamMember"
      :key="`member_${index}`"
      :team-member="member"
    >
    </team-member>
  </div>
</template>
<script>
import TeamMember from "@/components/company/TeamMember";
export default {
  components: { TeamMember },
  props: {
    teamMembers: {
      type: Array,
    },
  },
};
</script>
