<template>
  <v-row class="d-flex flex-row" v-if="teamMember && teamMember.length > 0">
    <v-col
      md="3"
      v-for="(member, index) in selectedMembers"
      :key="`prev_${index}`"
      class="ma-0 pa-0"
    >
      <v-list-item
        @click="openProfile(member)"
        class="pa-3"
        style="display: block;"
      >
        <v-img
          class="picture-preview my-1"
          :src="member.picture || require('~/assets/img/default-picture.png')"
          max-width="70"
          max-height="70"
        >
        </v-img>
        <span class="ma-0 text-name">{{ firstName(member) }}</span>
      </v-list-item>
    </v-col>
  </v-row>
  <div class="ma-8" v-else>
    <span class="text-small">{{ $t("common.not_found") }}</span>
  </div>
</template>
<script>
export default {
  props: {
    size: { type: Number, default: null },
    members: { type: Array, default: () => [] },
  },
  methods: {
    firstName(member) {
      return member && (member.name || " ").split(" ")[0];
    },
    openProfile(member) {
      const url = `https://bio.torre.co/en/${member.username}`;
      window.open(url, "_blank");
    },
  },
  computed: {
    selectedMembers() {
      return this.members.slice(0, this.size ? this.size : this.members.length);
    },
  },
};
</script>
<style scoped>
.picture-preview {
  border-radius: 50%;
}

.text-name {
  font-size: 0.8vw;
}
</style>
<style scoped>
.text-small {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>