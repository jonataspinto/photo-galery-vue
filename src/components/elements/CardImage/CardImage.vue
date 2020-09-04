<template>
  <CardWrapper>
    <SImage :alt="alt" :src="src"/>
    <ImageAuthor>{{author}}</ImageAuthor>
  </CardWrapper>
</template>

<script>
  import {
    CardWrapper,
    SImage,
    ImageAuthor,
  } from './CardImageStyled';

  export default {
    components: {
      CardWrapper,
      SImage,
      ImageAuthor
    },
    props: {
      src: String,
      alt: String,
      author: String,
    }
  }
</script>