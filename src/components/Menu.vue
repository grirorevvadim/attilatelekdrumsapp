<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid class="pa-0">
        <v-card class="tabs" fluid>
          <v-tabs
            bg-color="indigo-darken-4"
            grow
            align-tabs="start"
            v-model="tab"
          >
            <v-tab fixed value="one">Home</v-tab>
            <v-tab fixed value="two">My Story</v-tab>
            <v-tab fixed value="three">Music</v-tab>
            <v-tab fixed value="four">Feedbacks</v-tab>
            <v-tab fixed value="five">Drum Lessons - Prices</v-tab>
            <v-tab fixed value="six">Contact</v-tab>
          </v-tabs>

          <v-card-text class="pa-0">
            <v-window v-model="tab">
              <v-window-item value="one">
                <!-- <img :src="imgUrl"/> -->
                <v-img cover class="mb-10" src="@/assets/AttilaTelekDrums.webp">
                  <h1
                    class="pa-5 text-h3 text-right text-white mb-15 font-weight-light"
                  >
                    Welcome at AttilaTelekDrums.com
                  </h1>
                  <h2 class="text-h6 pr-4 text-white text-right">
                    Drummer of Paulina, Flanger Kids, Böbe, Chameleon Jazz Band,
                    Macskin Dávid Trió, perpētuum and more.
                  </h2></v-img
                >

                <h2 class="text-h3 text-center pb-3">About Me</h2>
                <h3 class="text-h4 px-16 mb-10 font-weight-light text-justify">
                  My name is Attila Telek and I'm a professional session
                  drummer. I started to play drums in 2008 and since then it
                  became a true passion. I finished my music studies at Bartók
                  Béla Conservatory in Budapest and after that I took courses
                  from the best drum teachers in Los Angeles and New York. My
                  goal is to introduce music to my students through drums not
                  only as a listener but as an active member of the music.
                </h3>
                <h2 class="text-h3 text-center pb-3">
                  Location of the drum lessons
                </h2>
                <h3
                  href="https://maps.app.goo.gl/6upxDHfVVcwG8bob8"
                  class="text-h4 px-16 mb-10"
                >
                  Budapest, Kondorfa u. 2, 1116
                  <v-btn href="https://maps.app.goo.gl/6upxDHfVVcwG8bob8">
                    <v-icon icon="mdi-map-marker" />
                  </v-btn>
                </h3>
              </v-window-item>

              <v-window-item value="two">
                <Story />
              </v-window-item>

              <v-window-item value="three">
                <Music />
              </v-window-item>
              <v-window-item value="four">
                <Feedback />
              </v-window-item>
              <v-window-item value="five">
                <Lessons @someEvent="setTab"></Lessons>
              </v-window-item>
              <v-window-item value="six">
                <EmailForm></EmailForm>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script setup>
import EmailForm from "@/components/EmailForm.vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import Feedback from "@/components/Feedback.vue";
import Story from "@/components/Story.vue";
import Music from "@/components/Music.vue";
import Lessons from "@/components/Lessons.vue";
import { computed, onMounted, reactive, ref, watch } from "vue";
import imgUrl from "@/assets/AttilaTelekDrums.webp";
let tab = ref(null);
const selectedTab = computed(() => {});
function setTab() {
  tab.value = "six";
}
watch(tab, (newX) => {
  console.log(`x is ${newX}`);
  sessionStorage.setItem("key", newX);
});
onMounted(() => {
  if (sessionStorage.getItem("key")) tab.value = sessionStorage.getItem("key");
  else tab.value = "one";
});
</script>

<style>
.tabs {
  width: 100% !important;
}
</style>