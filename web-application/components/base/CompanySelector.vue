<template>
  <div>
    <v-card-text>
      <v-text-field
        v-model="textSearch"
        :loading="isLoading"
        @input="keyPressed"
        color="white"
        :label="$t('common.torre_companies')"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-list three-line>
      <div
        v-if="firstSearch && (companies === undefined || companies.length == 0)"
        class="grey--text mb-2 text-center"
      >
        {{ $t("common.no_results") }}
      </div>
      <template v-else v-for="(item, index) in companies">
        <v-list-item
          :dark="(selectedCompany || {}).id !== item.id"
          @click.prevent="companySelected(index)"
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.picture"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({
    firstSearch: false,
    isLoading: false,
    search: null,
    timeout: undefined,
    companies: [],
    textSearch: undefined,
    selectedCompany: undefined,
  }),
  methods: {
    companySelected(id) {
      this.selectedCompany = this.companies[id];
      this.$emit("input", this.companies[id]);
    },
    keyPressed(val) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.searchCompany(val);
      }, 500);
    },
    async searchCompany(name) {
      this.isLoading = true;
      try {
        this.companies = await this.$axios.$get(
          `/companies/search?name=${name}`
        );
      } catch (error) {
        console.error(error);
      }
      this.firstSearch = true;
      this.isLoading = false;
      console.log(this.companies);
    },
  },
};
</script>
