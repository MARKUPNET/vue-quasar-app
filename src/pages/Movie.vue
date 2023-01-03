<template>
  <q-page class="q-pa-lg">

    <h1 class="q-mt-none text-bold">Movie</h1>

    <h2>SAMPLE 1</h2>
    <my-movie moviepath="sample.mp4"></my-movie>

    <h2>SAMPLE 2</h2>
    <video src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" controls muted></video>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import MyMovie from '../components/MyMovie.vue';


export default defineComponent({
  components: { MyMovie },
  name: 'MoviePage',


})
</script>

<style lang="scss">
</style>
