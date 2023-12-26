<template>
  <v-container>
    <div class="customFont px-16 mb-10 font-weight-light text-justify">
      <header class="mb-4 customFontTitle font-weight-bold">{{ $t("message.myStory") }}</header>
      <div class="story-flex-container">
        <div class="mr-8 story-flex-item">
          <div class="customFont">
            {{ $t("message.storyOne") }}
          </div>

          <div class="customFont mt-3">
            {{ $t("message.storyTwo") }}
          </div>
          <div class="mt-3 customFont">
            {{ $t("message.storyThree") }}
          </div>
        </div>
        <v-img
          class="story-flex-item rounded-sm"
          width="393"
          height="491"
          src="@/assets/MyStory.webp"
        >
        </v-img>
      </div>
    </div>
  </v-container>
</template>
<style scoped>
.story-flex-container {
  display: flex;
}
</style>