<template>
  <div>
    <div class="font-600">about</div>
    <div>{{ message }}</div>
    <p>{{ doubleCount }}</p>
    <v-btn @click="updateMessage">Update message</v-btn>
    <button @click="fetchData">Get</button>
    <div class="mt-3 ml-4">
      <Test>
        <template #default="{ value }">
          <h1>User Information</h1>
          <p>Name: {{ value.header }}</p>
          <p>Age: {{ value.main }}</p>
        </template>
      </Test>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import Test from "~/pages/about/test.vue";
const message = ref("xin chao ban nhe");
const check = ref(false);

function updateMessage() {
  check.value = !check.value;

  if (check.value) {
    // Sửa từ check thành check.value
    message.value = "update message";
  } else {
    message.value = "xin chao ban nhe";
  }
}

const doubleCount = computed(() => message.value + " computed ");

watch(message, (newMessage, oldMessage) => {
  console.log("Message changed from", oldMessage, "to", newMessage);
});

async function fetchData() {
  const data = await useFetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log("response", data);
}
</script>
