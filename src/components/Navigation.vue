<template>
  <nav>
    <v-toolbar
      flat
      app
      color="indigo-darken-4"
      class="text-uppercase grey--text"
    >
      <span class="customFontTitle text-md-h6 text-lg-h5 ml-3 font-weight-thin"
        >Attila Telek Drums</span
      >
      <v-spacer></v-spacer>
      <div class="select">
        <v-select
        class="select"
          v-model="selectedLanguage"
          :items="supportedLanguages"
          item-title="name"
          item-value="code"
          @update:menu="changeLanguage"
        >
        </v-select>
      </div>
    </v-toolbar>
  </nav>
</template>

<script >
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
  data() {
    return {
      selectedLanguage: this.$i18n.locale,
      supportedLanguages: [
        { name: "English", code: "en" },
        { name: "Magyar", code: "hu" },
      ],

      selectedItem: null,
    };
  },
  methods: {
    changeLanguage() {
      console.log("in change lang");
      this.$i18n.locale = this.selectedLanguage;
    },
  },
};
</script>

<style>
.select {
  width: 20%;
  max-width: 20%;
  display: contents;
}
</style>