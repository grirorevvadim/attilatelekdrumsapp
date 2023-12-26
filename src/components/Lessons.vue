<template>
  <v-container>
    <div class="customFont">
      <p>
        {{ $t("lessons.title") }}
      </p>
      <p>
        {{ $t("lessons.variants") }}
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
        {{ $t("lessons.description") }}
      </p>
      <p class="mt-5">
        {{ $t("lessons.contact") }}
      </p>
    </div>
    <div class="contactButton">
      <v-btn class="button" color="indigo-darken-4" size="large" @click="$emit('someEvent')">{{ $t("lessons.contactMe") }}</v-btn>
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
.contactButton{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>