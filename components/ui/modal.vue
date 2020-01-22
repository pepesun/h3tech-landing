<template>
  <transition name="modal-fade">
    <div class="modal__background">
      <div class="modal" role="dialog" aria-describedby="modalDescription">
        <button @click="close" type="button" class="button--link button--close" aria-label="Close modal">
          x
        </button>
        <section id="modalDescription" v-html="modalContent" class="modal__body" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modalContent: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.modal__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-fade-enter,
.modal-fade-leave-active  {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active  {
  transition: opacity .5s ease
}

.modal  {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &__header  {
    display: flex;
    color: var(--color-primary);
    justify-content: flex-end;

  }

  &__body  {
    position: relative;
    padding: 40px 40px;
  }

  .button--close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: var(--color-primary);
    font-weight: 900;
    font-size: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    z-index: 11;
  }

}

@media screen and (max-width: 768px) {

  .modal {
    max-width: calc(100% - 20px);
    margin: 0 20px 0 20px;
  }

}

</style>
