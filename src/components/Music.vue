<template>
  <v-container>
    <div class="ma-5 text-h4 font-weight-bold text-center">Music</div>
    <div class="text-h5 font-weight-light">
      <p>
        Thankfully I was able to record and perform during the past years with
        many different artists not only in my own studio, but also in TV shows
        and different concerts. Scroll down and get to know more about my work.
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
        <v-sheet class="text-h4 font-weight-light flex-1-0 ma-2 pa-2">
          Paulina Studioconcert Petőfi LIVE!
        </v-sheet>

        <v-sheet
          class="text-h6 font-weight-light flex-1-1-100 ma-2 pa-2 text-justify"
        >
          The girl who started to use TikTok one year ago, and today the whole
          country knows her! Paulina brought her most known songs to the studio
          concert - and her guest will be Tarján Zsófi from Honeybeast!
        </v-sheet>
      </v-sheet>
    </v-flex>
    <v-divider :thickness="4"></v-divider>

    <v-flex class="pa-10 flex-container-video">
      <v-sheet class="w-50 d-flex flex-wrap">
        <v-sheet class="text-h4 font-weight-light text-center">
          Chameleon Jazz Band Window to my soul
        </v-sheet>

        <v-sheet
          class="text-h6 font-weight-light flex-1-1-100 ma-2 pa-2 text-justify"
        >
          The Chameleon Jazz Band performed for the first time the song Window
          to my soul in the morning show called "Család Barát" in the Duna TV.
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
        <v-sheet class="text-h4 font-weight-light text-center">
          Fazekas Eszter - Véletlen at Soundcam productions
        </v-sheet>

        <v-sheet
          class="text-h6 font-weight-light flex-1-1-100 ma-2 pa-2 text-justify"
        >
          Fazekas Eszter brought her first song "Véletlen" to the Friday
          sessions which is produced by the Soundcam Productions.
        </v-sheet>
      </v-sheet>
    </v-flex>
    <v-divider :thickness="4"></v-divider>
    <v-sheet class="pa-10 d-flex flex-container-video">
      <v-sheet class="w-50 flex-wrap text-center">
        <v-sheet class="text-h4 font-weight-light">
          Attila Telek - We're Good
        </v-sheet>

        <v-sheet
          class="text-h6 font-weight-light flex-1-1-100 ma-2 pa-2 text-justify"
        >
          A drum cover of Dua Lipa's song "We're Good" recorded in my own studio
          with 7 microphones and Studio One 5 DAW.
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