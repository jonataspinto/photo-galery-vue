<template>
  <HeaderContainer>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Title>Gridsby</Title>
    <Description>a bealtiful way to display your photos</Description>
  </HeaderContainer>
</template>

<script>
  import {
    HeaderContainer,
    Title,
    Description,
  } from './HeaderStyled';
  export default {
    components: {
      HeaderContainer,
      Title,
      Description,
    }
  }
</script>
