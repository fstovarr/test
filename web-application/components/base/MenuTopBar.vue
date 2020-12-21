<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <div>
        <span class="button-title">{{ title }}</span>
        <v-btn v-on="on" color="primary" icon class="mr-5" style="width: 60px;">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click.prevent="elementPressed(item)"
        style="width: 100%"
      >
        <v-list-item-title>
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      items: [{ key: "signout", name: this.$t("common.signout") }],
      title: this.$t("app.name"),
    };
  },
  methods: {
    ...mapActions({
      signout: "auth/signout",
    }),
    elementPressed(item) {
      switch (item.key) {
        case "signout":
          this.performSignOut();
          break;
      }
    },
    async performSignOut() {
      await this.signout();
      this.$router.push(`/auth`);
    },
  },
};
</script>
<style scoped>
.button-title {
  text-transform: capitalize;
}
</style>
