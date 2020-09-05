<template>
  <ModalContent v-if="showModal">
    <CloseButton @click="handleShowModal('close')">
      X
    </CloseButton>
  </ModalContent>
</template>

<script>
  import {
    ModalContent,
    CloseButton,
  } from './ModalStyled';

  import { mapState, mapActions } from 'vuex';
  export default {
    components: {
      ModalContent,
      CloseButton,
    },
    mounted () {
      console.log(this.showModal);
    },
    methods: {
      setState: function () { this.show = false},
      ...mapActions({
        handleShowModal: 'handleShowModal'
      }),
    },
    computed: {
      ...mapState({
        showModal: (state) => state.showModal,
        modalContent: (state) => state.modalContent,
      })
    }
  }
</script>