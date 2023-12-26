<template>
  <v-content>
    <v-container>
      <header class="ma-5 customFontTitle font-weight-bold">
        {{ $t("feedback.title") }}
      </header>

      <p class="ma-5 customFont">
        {{ $t("feedback.subtitle") }}
      </p>
      <p class="ma-5 customFont">{{ $t("feedback.listTitle") }}</p>
          <v-layout>
            <v-flex class="ml-3 customFont" style="max-width: 70%">
              <div class="text-form">
                <v-sheet :elevation="3" border rounded>
                  <h3 class="ml-2 customFont">Márió</h3>
                  <v-chip class="ml-2 customFont">{{ $t("feedback.feedbackOneTitle") }}</v-chip>
                  <h5 class="pa-3 customFont text-justify">
                    {{ $t("feedback.feedbackOne") }}
                  </h5>
                </v-sheet>
              </div>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex class="ml-3 customFont" style="max-width: 70%">
              <div class="text-form">
                <v-sheet :elevation="3" border rounded>
                  <h3 class="ml-2 customFont">Macskin Dávid</h3>
                  <v-chip class="ml-2 customFont">{{ $t("feedback.feedbackTwoTitle") }}</v-chip>
                  <h5 class="pa-3 customFont text-justify">
                    {{ $t("feedback.feedbackTwo") }}
                  </h5>
                </v-sheet>
              </div>
            </v-flex>
          </v-layout>
    </v-container>
  </v-content>
</template>

<script setup>
// import i18n from '@/i18n';
// const data = [
//   {
//     id: 1,
//     name: "Márió",
//     title: i18n.global.t("feedback.feedbackOneTitle"),
//     feedback: i18n.global.t("feedback.feedbackOne"),
//   },
//   {
//     id: 2,
//     name: "Macskin Dávid",
//     title: i18n.global.t("feedback.feedbackTwoTitle"),
//     feedback: i18n.global.t("feedback.feedbackTwo"),
//   },
// ];
</script>

<style scoped>
</style>