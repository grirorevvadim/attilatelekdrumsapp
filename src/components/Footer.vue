<template>
  <v-footer
    class="bg-indigo-darken-4 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        :key="icon"
        class="mx-4"
        icon='mdi-instagram'
        variant="text"
        href="https://www.instagram.com/attilatelekdr/"
      ></v-btn>
            <v-btn
        :key="icon"
        class="mx-4"
        icon='mdi-youtube'
        variant="text"
        href="https://www.youtube.com/channel/UCvlZ4CjNvLUw1WE8StKCZQQ"
      ></v-btn>
    </div>
    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Drum lessons in Budapest. All rights reserved by attilatelekdrums.com</strong>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-youtube',
        'mdi-instagram',
      ],
    }),
  }
</script>