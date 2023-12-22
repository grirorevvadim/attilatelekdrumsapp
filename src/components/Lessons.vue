<template>
  <v-container>
    <div class="customFont">
      <p>
        All the drum lessons are personalized depending on the student's goals
        and skills.
      </p>
      <p>
        If you liked the lesson and you would like to continue, you can select
        between 30, 45, 60 or 90 minutes long lessons.
      </p>
    </div>

    <v-table style="width: 50%">
      <thead>
        <tr>
          <th class="text-left">Duration</th>
          <th class="text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in realLessonsInfo" :key="item.duration">
          <td>{{ item.duration }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="customFont">
      <p class="mt-5">
        The drum lessons are not only for adults but children as well, from
        beginners to advanced drummers. With the help of the drum teaching
        materials collected over the years I will help you to build a confident
        drum technique, improve your creativity and teach how to be a stable
        band member.
      </p>
      <p class="mt-5">
        If you are interested, contact me and let's get started with the first
        lesson.
        <v-btn @click="$emit('someEvent')">Go To Contact Form</v-btn>
      </p>
    </div>
  </v-container>
</template>

<script>
import db from "@/fb";
import { collection, getDocs } from "firebase/firestore";

export default {
  created() {
    this.getData();
  },
  data() {
    return {
      lessonsInfo:[]
    };
  },
  computed:{
    realLessonsInfo(){
      return this.lessonsInfo;
    }
  },
  methods: {
    async getData() {
      const querySnapshot = await getDocs(collection(db, "lessons"));

      querySnapshot.forEach((doc) => {
        this.lessonsInfo.push(doc.data());
      });
    },
  },
};
</script>

<style>
</style>