<template>
  <div class="horizontal-form">
    <div class="horizontal-form__icon">
      <img :src="item.icon" :alt="item.title">
    </div>
    <div class="horizontal-form__details">
      <h3 v-html="item.title" class="horizontal-form__title" />
      <div v-html="item.description" class="horizontal-form__description" />
    </div>
    <div class="horizontal-form__action">
      <button
        v-html="item.buttonText"
        @click="changeSelected(item.value)"
        :class="[{ 'button--active': selectedOption === item.value}]"
        class="button--transparent button--status-indicator button--width-100"
      />
    </div>
    <div v-if="divider" class="divider--with-text" />
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    },
    divider: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: ''
    }
  },
  computed: {
    selectedOption () {
      return this.selected;
    }
  },
  mounted () {
  },
  methods: {
    changeSelected (val) {
      if (val === this.selectedOption) {
        this.$emit('refreshVal', null);
      } else {
        this.$emit('refreshVal', val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.horizontal-form {
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;

  &__icon {
    flex: 1 0 130px;
    max-width: 130px;
    width: 100%;
  }

  &__details {
    flex: 1 0 auto;
  }

  &__title {
    font-size: 18px;
    line-height: 22px;
    color: var(--color-dark);
    margin: 0 0 10px 0;
  }

  &__description {
    font-size: 16px;
    font-weight: 300;
  }

  &__action {
    flex: 1 0 auto;
    max-width: 240px;

    button {
      height: 70px;
    }
  }

  .divider--with-text {
    margin: 25px auto;
  }

  &:last-of-type .divider--with-text {
    display: none;
  }

}

@media screen and (max-width: 768px) {
  .horizontal-form {

    &__icon {
    flex: 1 0 80px;
    max-width: 80px;
    }

    &__details {
      flex: 1 0 calc(100% - 90px);
      max-width: calc(100% - 90px);
      padding-left: 10px;
    }

    &__title {
      font-size: 16px;
    }

    &__description {
      font-size: 14px;
      line-height: 20px;
      margin: 10px 0 20px 0;
    }

    &__action {
      flex: 1 0 100%;
      max-width: 100%;

      button {
        width: 100%;
      }

    }

  }

}
</style>
