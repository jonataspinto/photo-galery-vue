<template>
  <div id="app">
    <GlobalStyles />
    <Header />
    <router-view/>
  </div>
</template>
<script>
  import { Header } from './components/features'
  import { GlobalStyles } from './styles/global'
  export default {
    components: {
      Header,
      GlobalStyles
    }
  }
</script>
