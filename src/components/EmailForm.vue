<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      inputRules: [
        (v) => v.length <= 1000 || "Maximum length is 1000 characters",
      ],
      snackbar: false,
    };
  },
  methods: {
    sendEmail() {
        emailjs
          .sendForm(
            "service_y4srkj9",
            "template_egbrprv",
            this.$refs.form,
            "nSRwtB2qhhCD-T4vY"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
              this.snackbar = true;
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
    },
  },
};
</script>

<template>
  <v-container>
    <v-list class="ma-5 text-h5">
      <v-list-item>
        <v-icon icon="mdi-email-outline"></v-icon> Email:
        attilatelekdr@gmail.com
      </v-list-item>
      <v-list-item>
        <v-icon icon="mdi-cellphone"></v-icon> Phone number +36702325532
      </v-list-item>
      <v-list-item>
        <v-icon icon="mdi-map-marker" /> Location of lessons: Budapest, Kondorfa
        u. 2, 1116
      </v-list-item>
    </v-list>

    <v-card>
      <div class="container">
        <form class="px-3" ref="form" @submit.prevent="sendEmail">
          <v-snackbar class="d-flex justify-center text-center" v-model="snackbar" :timeout="4000" color="indigo-darken-1" location="top">
            <span>The message was sent succesfully</span>
          </v-snackbar>
          <label>Name</label>
          <v-text-field
            maxlength="15"
            required
            type="text"
            v-model="name"
            name="name"
            placeholder="Your Name"
            :rules="inputRules"
          />
          <label>Email</label>
          <v-text-field
            maxlength="50"
            required
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
          />
          <label>Message</label>
          <v-textarea
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            maxlength="1000"
            required
            :rules="inputRules"
            placeholder="Message"
          >
          </v-textarea>

          <v-text-field class="submit" type="submit" value="Send" />
        </form>
      </div>
    </v-card>
  </v-container>
</template>
<style scoped>
.submit {
  width: 30%;
}
</style>