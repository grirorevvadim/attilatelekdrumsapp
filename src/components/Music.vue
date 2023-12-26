<template>
  <v-container>
    <div class="ma-5 customFontTitle font-weight-bold text-center">
      {{ $t("message.myMusic") }}
    </div>
    <div class="customFont font-weight-light">
      <p>
        {{ $t("message.musicText") }}
      </p>
    </div>
    <v-flex class="pa-10 flex-container-video">
      <v-flex class="video">
        <LiteYouTubeEmbed
          id="oZn78kSXdDQ"
          title="Paulina stúdiókoncert • Petőfi LIVE!"
        />
      </v-flex>
      <v-sheet class="w-50 d-flex flex-wrap">
        <v-sheet
          class="customFontTitle font-weight-light flex-1-0 ma-2 pa-2 text-center"
        >
          {{ $t("message.musicStoryOneTitle") }}
        </v-sheet>

        <v-sheet
          class="customFont font-weight-light flex-1-1-100 ma-2 pa-2 text-justify"
        >
          {{ $t("message.musicStoryOne") }}
        </v-sheet>
      </v-sheet>
    </v-flex>
    <v-divider :thickness="4"></v-divider>

    <v-flex class="pa-10 flex-container-video">
      <v-sheet class="w-50 d-flex flex-wrap">
        <v-sheet class="customFontTitle font-weight-light text-center">
          {{ $t("message.musicStoryTwoTitle") }}
        </v-sheet>

        <v-sheet
          class="customFont font-weight-light flex-1-1-100 ma-2 pa-2 text-justify"
        >
          {{ $t("message.musicStoryTwo") }}
        </v-sheet>
      </v-sheet>
      <v-sheet class="video">
        <LiteYouTubeEmbed
          id="m381hdXJ1Pw"
          title="Fazekas Eszter - Véletlen at Soundcam productions"
        />
      </v-sheet>
    </v-flex>
    <v-divider :thickness="4"></v-divider>
    <v-flex class="pa-10 flex-container-video">
      <v-sheet class="video">
        <LiteYouTubeEmbed
          id="Dftr90V1nig"
          title="Chameleon Jazz Band Window to my soul"
        />
      </v-sheet>
      <v-sheet class="w-50 d-flex flex-wrap">
        <v-sheet class="customFontTitle font-weight-light text-center">
          {{ $t("message.musicStoryThreeTitle") }}
        </v-sheet>

        <v-sheet
          class="customFont font-weight-light flex-1-1-100 ma-2 pa-2 text-justify"
        >
          {{ $t("message.musicStoryThree") }}
        </v-sheet>
      </v-sheet>
    </v-flex>
    <v-divider :thickness="4"></v-divider>
    <v-sheet class="pa-10 d-flex flex-container-video">
      <v-sheet class="w-50 flex-wrap text-center">
        <v-sheet class="customFontTitle font-weight-light">
          {{ $t("message.musicStoryFourTitle") }}
        </v-sheet>

        <v-sheet
          class="customFont font-weight-light flex-1-1-100 ma-2 pa-2 text-justify"
        >
          {{ $t("message.musicStoryFour") }}
        </v-sheet>
      </v-sheet>
      <v-sheet class="video">
        <LiteYouTubeEmbed id="8dKE0uwSbKs" title="Attila Telek - We're Good" />
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script setup>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
</script>

<style>
.flex-container-video {
  display: flex;
  flex-direction: row;
}

.video-text {
  display: flex;
  flex-direction: column;
}

.video {
  width: 50%;
}
</style>