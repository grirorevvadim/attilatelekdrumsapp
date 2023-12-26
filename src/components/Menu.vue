<template>
  <v-app class="appFont">
    <Navigation />
    <v-content>
      <v-container fluid class="pa-0">
        <v-card class="text-h3 font-weight-bold tabs" fluid>
          <v-tabs bg-color="white" grow align-tabs="start" v-model="tab">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-tab
                  fixed
                  value="one"
                  v-bind="props"
                  :color="isHovering ? 'white' : undefined"
                  >{{ $t("message.homeTab") }}</v-tab
                >
              </template>
            </v-hover>

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-tab
                  fixed
                  value="two"
                  v-bind="props"
                  :color="isHovering ? 'white' : undefined"
                  >{{ $t("message.storyTab") }}</v-tab
                ></template
              ></v-hover>
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-tab
                  fixed
                  value="three"
                  v-bind="props"
                  :color="isHovering ? 'white' : undefined"
                  >{{ $t("message.musicTab") }}</v-tab
                >
              </template></v-hover
            >

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-tab
                  fixed
                  value="four"
                  v-bind="props"
                  :color="isHovering ? 'white' : undefined"
                  >{{ $t("message.feedbackTab") }}</v-tab
                >
              </template></v-hover
            >

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-tab
                  fixed
                  value="five"
                  v-bind="props"
                  :color="isHovering ? 'white' : undefined"
                  >{{ $t("message.lessonsTab") }}</v-tab
                >
              </template></v-hover
            >

            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-tab
                  fixed
                  value="six"
                  v-bind="props"
                  :color="isHovering ? 'white' : undefined"
                  >{{ $t("message.contactTab") }}</v-tab
                >
              </template></v-hover
            >
          </v-tabs>

          <v-card-text class="pa-0">
            <v-window v-model="tab">
              <v-window-item value="one">
                <!-- <img :src="imgUrl"/> -->
                <v-img cover src="@/assets/AttilaTelekDrums.webp">
                  <h1
                    class="pa-5 customFontTitle text-right text-white mb-15 font-weight-light"
                  >
                    {{ $t("message.welcome") }}
                  </h1>
                  <h2 class="customFont pr-4 text-white text-right">
                    {{ $t("message.welcomeSub") }}
                  </h2></v-img
                >

                <div class="pb-10" style="background-color: rgb(217, 223, 255)">
                  <h2 class="pt-10 customFontTitle text-center pb-3">
                    {{ $t("message.about") }}
                  </h2>
                  <h3
                    class="customFont px-16 mb-10 font-weight-light text-justify"
                    style="
                      font-size: 20px;
                      line-height: 1.875em;
                      width: 70%;
                      margin: auto;
                    "
                  >
                    {{ $t("message.aboutText") }}
                  </h3>
                </div>
                <h2 class="customFontTitle text-center pb-3">
                  {{ $t("message.location") }}
                </h2>
                <div class="mb-10 mt-10" >
                  <a href="https://maps.app.goo.gl/GkEsbcHFu4H9Tao77">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2697.798605956814!2d19.0423316!3d47.4548651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd9ea9dfb449%3A0xa41e0aa10f8083cc!2sBudapest%2C%20Kondorfa%20u.%202%2C%201116!5e0!3m2!1sru!2shu!4v1703258579794!5m2!1sru!2shu"
                        width="980"
                        height="450"
                        style="border: 0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </a>
                </div>
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
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rozha+One&display=swap");
.appFont {
  font-family: "bai jamjuree", sans-serif !important;
}
.tabs {
  width: 100% !important;
}
.customFont {
  font-family: "Bai Jamjuree", sans-serif;
  line-height: 1.875em;
  font-size: 20px;
  letter-spacing: normal;
}

.customFontTitle {
  font-family: "Rozha One", serif;
  font-size: 44px;
  line-height: normal;
}

#map{
  text-align: center;
}

.v-tab:hover{
  background-color: red;
}
</style>