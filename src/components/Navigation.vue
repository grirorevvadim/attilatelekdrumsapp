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
      <v-select class="select" :items="locales" v-model="$i18n.locale">
      </v-select>
    </v-toolbar>
  </nav>
</template>

<script >
export default {
  data() {
    return {
      selectedItem: null,
      dLevels: [
        { id: 1, value: 1, description: "Level1" },
        { id: 2, value: 2, description: "Level2" },
      ],
      langs: [
        { lang: "hu", image: "@/assets/flags/hu.png" },
        { lang: "en", image: "@/assets/flags/en.png" },
      ],
      locales:['hu','en'],
    };
  },
};
</script>

<style>
.select {
  width: 10%;
  max-width: 10%;
  display: contents;
}
</style>