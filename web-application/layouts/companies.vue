<template>
  <v-app dark>
    <v-content class="background-container">
      <v-app-bar fixed app>
        <div></div>
        <language-selector class="ml-10" />
        <v-spacer></v-spacer>
        <menu-top-bar />
      </v-app-bar>
      <v-container fill-height align-content-center justify-center>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      style="background-color: transparent;"
      class="justify-center mb-4"
      app
    >
      <span class="footer-title">{{ $t("app.name") }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import LanguageSelector from "@/components/LanguageSelector";
import MenuTopBar from "@/components/base/MenuTopBar";

export default {
  components: { LanguageSelector, MenuTopBar },
  middleware: "auth",
  data() {
    return {
      fixed: true,
      title: this.$t("app.name"),
    };
  },
};
</script>
<style scoped>
.footer-title {
  color: #fff !important;
}
</style>
