<template>
  <div :class="[collapseClasses, className]" class="collapse-block">
    <div @click="togglecollapse" class="collapse-block__header">
      {{ title }}
    </div>
    <div v-html="content" class="collapse-block__body" />
  </div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      openStatus: this.isOpen
    };
  },
  computed: {
    collapseClasses () {
      return {
        'collapse-block--open': this.openStatus
      };
    }
  },
  methods: {
    togglecollapse () {
      this.openStatus = !this.openStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
.collapse-block {
  display: block;
  width: 100%;

  &__header {
    background: var(--main-bg-color);
    padding: 8px 20px;
    color: var(--color-secondary);
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: var(--border-radius);
    width: 100%;
    position: relative;
    cursor: pointer;

    &:after {
      content: url(/icons/icon-arrow-down-colored.svg);
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%) rotate(0);
      transition: all .25s var(--cubic-bezier);
      transform-origin: center center;
    }

  }

  &__body {
    padding:0 20px;
    font-size: 14px;
    overflow: hidden;
    border: 1px solid var(--main-bg-color);
    border-top: none;
    border-radius: 0px 0px var(--border-radius) var(--border-radius);
    opacity: 0;
    max-height: 0;
    transition: all .3s ease-in-out;
  }

  &--open{

    .collapse-block__header {
        border-radius: var(--border-radius) var(--border-radius) 0px 0px ;

        &:after {
          transform: translateY(calc(-50% - 5px)) rotate(-180deg);
        }

    }

  .collapse-block__body {
      padding:20px;
      opacity: 1;
      max-height: 100em;
    }

  }

}

</style>
