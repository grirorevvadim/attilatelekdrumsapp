<template>
  <v-content>
    <v-container>
      <header class="ma-5 text-h4 font-weight-bold">
        Feedbacks written by students and artists
      </header>

      <p class="ma-5 text-h5">
        During my career I have received different feedbacks from different
        students and artist.
      </p>
      <p class="ma-5 text-h5">Here are a few of them:</p>
      <v-list v-for="i in data" :key="i.id">
        <v-list-item>
          <v-layout>
            <!-- <v-spacer /> -->
            <v-flex class="ml-3 text-subtitle-1" style="max-width: 70%">
              <div class="text-form">
                <v-sheet :elevation="3" border rounded>
                  <h3 class="ml-2 text-h4">{{ i.name }}</h3>
                  <v-chip class="ml-2 text-subtitle-1">{{ i.title }}</v-chip>
                  <h5 class="pa-3 text-body-1 text-justify">
                    {{ i.feedback }}
                  </h5>
                </v-sheet>
              </div>
            </v-flex>
          </v-layout>
        </v-list-item>
      </v-list>
    </v-container>
  </v-content>
</template>

<script setup>
const data = [
  {
    id: 1,
    name: "Márió",
    title: "ex student at the school of art in Dombóvár",
    feedback:
      "I have met a good teacher and person in Attila. The drum classes were in a very good mood,I was able to learn many new techniques and styles. I was also happy to get to know his work and his bands better. I really liked to attend the drum lessons every time.",
  },
  {
    id: 2,
    name: "Macskin Dávid",
    title: "trumpet artist - teacher",
    feedback:
      "I am very lucky to be able to work with Attila for 2 years now. The precision and virtuosity of his playing makes him one of the best of his generation. His musical openness, hard work, humor and reliability makes the common work very smooth and enjoyable. These qualities are the greatest of a music teacher. Everyone, from beginners to professional drummers, can contact him with confidence, because his knowledge and stage routine provides a good basis for the studies.",
  },
];
</script>

<style scoped>
/* .feedback-flex-container {
  display: flex;
  flex-flow: column wrap;
} */
</style>