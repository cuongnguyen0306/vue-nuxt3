<template>
  <div>
    <slot :value="data"> </slot>
 
  </div>
</template>

<script setup>
const data = {
  header: "Header Content",
  main: "Main Content",
  mooter: "Footer Content",
};
</script>
