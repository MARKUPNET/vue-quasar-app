<template>
  <q-page class="q-pa-lg">

    <h1 class="q-mt-none text-bold">MicroCMS</h1>
    <h2>BLOG一覧</h2>

    <p>全 {{ articles.totalCount }} 頁</p>

    <q-list>

      <q-item
        v-for="item in articles.contents"
        :key="item.id"
        to="/blog/${item.id}"
        clickable
        v-ripple>
        <q-item-section thumbnail>
          <img :src=item.eyecatch.url />
        </q-item-section>
        <q-item-section>{{ item.title }}</q-item-section>
      </q-item>

    </q-list>

    <q-btn v-on:click="show" color="white" text-color="black" label="Standard" />


    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        :max="5"
        direction-links
      />
    </div>

  </q-page>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { createClient } from 'microcms-js-sdk';

  const client = createClient({
    serviceDomain: "markupnet",
    apiKey: "31l8co8ClB9CoZEYnXTkX1pjZ6oxFWTERuzh",
    // apiKey: process.env.API_KEY,
  });

  export default defineComponent({
    name: 'BlogPage',

    data: () => ({
      articles: [],
    }),

    setup () {
      return {
        current: ref(1)
      }
    },

    methods: {
      show: function () {
        console.log('CLICK');
      }
    },

    async mounted() {
      await client.get({
        endpoint: 'blogs',
        queries: { limit: 1 }
      })
      .then(response => {
        this.articles = response
      })
    }
  })

</script>

<style lang="scss">
</style>
