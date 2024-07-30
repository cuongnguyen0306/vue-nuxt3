<template>
  <div>
    aaaaaaa
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
    <v-btn @click="handle">hihi</v-btn>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["changeMessage", "change2"]);
const props = defineProps({
  message: String,
});
function changeMessage() {
  emit("changeMessage", "xin chao");
}
function handle() {
  emit("change2", "hihi");
}
</script>

<style></style>
