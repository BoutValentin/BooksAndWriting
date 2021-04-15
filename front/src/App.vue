<template>
  <div id='appWrapper' :data-theme='theme'>
    <div id="containerBodyLike">
      <div class='themecontainer'>
        <Theme />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Theme from '@/components/Theme/Theme.vue';

export default defineComponent({
  name: "App",
  components: {
    Theme,
  },
  computed: {
    theme() {
      return this.$store.state.theme
    }
  }
});
</script>

<style lang="scss">
* {
	box-sizing: border-box;
	transition-property: color, background-color;
	transition-duration: 0.1s, 0.3s;
	transition-delay: 0s;
	transition-timing-function: ease-out;
}

html, body {
	position: relative;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
}

body {
	box-sizing: border-box;
	width: 100%;
	margin: 0 auto;
	color: var(--main-font-color);
	background-color: var(--main-bg-color);
	box-sizing: border-box;
	font-family: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

@media (max-width: 1000px) {
	body {
		max-width: 100%;
	}
}

#appWrapper {
  margin: 0 auto;
  padding: 0;
  background-color: var(--main-bg-color);
  color: var(--main-font-color);
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
  transition: all 0.3s ease;
}

#appWrapper[data-theme='light'] {
  --main-font-color: #131319;
  --main-bg-color: #fff;
  --main-accent-color-1: #cc2936;
  --main-accent-color-2: #656839;
  --main-accent-color-3: #678d58;
}

#appWrapper[data-theme='dark'] {
  --main-font-color: #fff;
  --main-bg-color: #131319;
  --main-accent-color-1: #cc2936;
  --main-accent-color-2: #656839;
  --main-accent-color-3: #678d58;
}

#containerBodyLike {
  max-width: 1600px;
  margin: 0 auto
}

.themecontainer {
        z-index: 100;
        position: fixed;
        right: 15px;
        top: 15px;
        transition: all 0.3s ease;
        opacity: 0.3;
    }

    .themecontainer:hover {
        opacity: 1;
    }
</style>
