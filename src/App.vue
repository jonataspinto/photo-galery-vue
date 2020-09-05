<template>
  <div id="app">
    <Modal />
    <GlobalStyles />
    <Header />
    <router-view/>
  </div>
</template>
<script>
  import { Header } from './components/features';
  import { Modal } from './components/modules'
  import { GlobalStyles } from './styles/global'
  
  export default {
    components: {
      Header,
      GlobalStyles,
      Modal,
    }
  }
</script>
