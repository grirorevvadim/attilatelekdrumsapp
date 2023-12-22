<template>
  <nav>
    <v-toolbar
      flat
      app
      color="indigo-darken-4"
      class="text-uppercase grey--text"
    >
      <span class="customFontTitle text-md-h6 text-lg-h5 ml-3 font-weight-thin">Attila Telek Drums</span>
      <v-spacer></v-spacer>
      <v-select
        style="max-width: 220px;"
        label="Select Language"
        :items="['English', 'Magyar']"
        variant="underlined"
      ></v-select>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>