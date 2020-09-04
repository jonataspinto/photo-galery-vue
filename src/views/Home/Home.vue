<template>
  <Content>
    <grid v-show="!loading">
      <card-image
        v-for="(image, index) in images"
        v-show="image.url"
        :key="image.url"
        :alt="`indexImage@${index}`"
        :src="image.download_url"
        :author="image.author"
      />
    </grid>
    <loading :active.sync="loading"
      :is-full-page="true"></loading>
  </Content>
</template>

<script>
  import{ Content } from './HomeStyled';
  import Loading from 'vue-loading-overlay';
  import {
    CardImage,
  } from '../../components/elements';
  import {
    Grid,
  } from '../../components/modules';
  export default {
    components: {
      Content,
      Loading,
      Grid,
      CardImage
    },
    data(){
      return {
        images: [],
        loading: true,
      }
    },
    mounted() {
      fetch('https://picsum.photos/v2/list?limit=12')
        .then(response => response.json())
        .then(response => {
          this.images = response.map(image => image.width > image.height && image);
          console.log(response)
          setTimeout(() => {
            this.setLoading()
          }, 3000);
        })
    },
    methods: {
      setLoading: function () {
        this.loading = !this.loading
      },
    }
  }
</script>