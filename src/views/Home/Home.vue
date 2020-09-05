<template>
  <Content>
    <grid v-show="!imagesModule.loading">
      <card-image
        v-for="(image, index) in imagesModule.images"
        v-show="image.url"
        :key="image.url"
        :alt="`indexImage@${index}`"
        :src="image.download_url"
        :author="image.author"
      />
    </grid>
    <loading
      :active.sync="imagesModule.loading"
      :is-full-page="true"
    />
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
  import { mapState, mapActions } from 'vuex';

  export default {
    components: {
      Content,
      Loading,
      Grid,
      CardImage
    },
    mounted() {
      this.fetchImages()
    },
    methods: {
      ...mapActions({
        fetchImages: 'fetchImages'
      })
    },
    computed: {
      ...mapState({
        imagesModule: ({ imagesModule }) => imagesModule,
      })
    }
  }
</script>