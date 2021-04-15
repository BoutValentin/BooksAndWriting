<template>
    <div class="theme__container">
        <div class="background">
            <div class="round" :class="classObject" @click="changeTheme">
                <Sun v-if="isLightMode"/>
                <Moon v-else/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ComponentPublicInstance, defineComponent } from "vue";
import Moon from '@/components/Theme/Moon.vue';
import Sun from '@/components/Theme/Sun.vue';
import { type_theme } from "@/store/";
type classObjectType = {
    'left': boolean,
    'right': boolean,
}




export default defineComponent({
  name: "Theme",
  components: {
      Moon, 
      Sun
  },    
  methods: {
      changeTheme() {
              this.$store.commit('changeTheme', this.isLightMode ? 'dark' : 'light')
      }
  },
  computed: {
    theme(): type_theme {
      return this.$store.state.theme
    },
    classObject():classObjectType {
        return {
        'left': this.$store.state.theme === 'light',
        'right': this.$store.state.theme === 'dark'
        }
    },
    isLightMode(): boolean {
        return this.theme === 'light'
    }
  }
});
</script>

<style lang="scss" scoped>
    .theme__container {
        margin: auto 20px;
        height:  22px;
        width: 40px;
    .background {
        position: relative;
        height: 100%;
        width: 100%;
        background-color: var(--main-font-color);
        border-radius: 25px;    

        .round {
        cursor: pointer;
        position: absolute;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: var(--main-bg-color);
        border: 3px solid var(--main-font-color);
        transition: all 0.3s ease;
        padding: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }

    .left {
        top:0px;
        left: 0px;
        transform: translate(-50%, -10%);
    }

    .right {
        top:0px;
        right: 0px;
        transform: translate(50%, -10%);
    }

    @media (max-width: 530px) {

        .container {
            margin: 5px 5px 5px 5px; 
        }
    }
    }
    }

</style>