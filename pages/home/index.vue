<template>
  <div>
    <div>home page</div>
    <Content :message="message" @changeMessage="change" @change2="change2" />
    <v-btn @click="update">update props</v-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Content from "~/pages/home/content";
const message = ref("Welcome");

function update() {
  message.value = "Hello, updated!";
}
function change(val) {
  message.value = val;
}
function change2(val) {
  console.log(val);
}
</script>
