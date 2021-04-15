<template>
    <section class="home" id="home">
        <Me />
        <div class="home__presentation">
            <p class="title">I love Reading and Writing</p>
            <div class="home__presentation--link">
                <p>See my recommendations</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Me from "@/components/Home/Me.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeComponents",
  components: {
    Me,
  },
});
</script>

<style lang="scss">

    .home {
        margin-top: 0px;
        min-height: 100vh;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        .home__presentation {
            max-width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            padding: 15px;
            .title {
                font-size: 9vmin;
                margin-bottom: 15px;
                text-align: center;
                font-family: 'Bitter', serif;
            }

            .home__presentation--link {
                p{ 
                    font-size: 5vmin;
                    margin-top: 5px;
                    text-align: center;
                }
                
            }
        }   
    }

</style>