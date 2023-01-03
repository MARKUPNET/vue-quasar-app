<template>
  <video :src="videosrc" v-video="play"></video>
  <div>
    <q-btn
    @click="play=!play"
    color="primary">{{btnstate}}</q-btn>
  </div>
</template>

<script>
export default ({

  data: function(){
    return {
      play: false,  // 再生・停止状態
      videosrc: require(`../assets/movie/` + this.moviepath) // videosrc: require(`../assets/movie/sample.mp4`)
    }
  },
  directives: {
    video(el, binding){
      binding.value ? el.play() : el.pause();
    }
  },
  computed:{
    btnstate(){
      return this.play ? "STOP ■" : "PLAY ▸";
    }
  },
  props: {
    moviepath: String // 呼出元から渡されるビデオのパス
  },
})
</script>

<style lang="scss">
video{
  width: 100%;
  max-width: 600px;
}
</style>
