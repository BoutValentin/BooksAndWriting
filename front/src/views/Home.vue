<template>
  <HomeComponents />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeComponents from "@/components/Home/Home.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HomeComponents,
  },
});
</script>
