<template>
  <div class="baggage__item">
    <span v-if="baggage.isPopular" class="baggage__popular"><span class="baggage__popular-text">popular</span></span>
    <input
      :name="groupName"
      :value="baggage.title"
      :id="baggage.title"
      v-model="selected"
      @input="updateValue($event.target.value)"
      type="radio"
      class="form-block__input--radio"
    >
    <label :for="baggage.title" class="baggage__label form-block__label--no-icon">
      <span class="baggage__icon"><img :src="getIconURL(baggage.title)" :alt="baggage.title"></span>
      <span class="baggage__weight">{{ formatWeight(baggage.weight) }}</span>
      <span class="baggage__price">{{ formatPrice(baggage.price) }}</span>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    baggage: {
      type: Object,
      default: null
    },
    groupName: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: ''
    },
    emptyCheckedBaggage: {
      type: Boolean,
      default: false
    },
    defaultSelected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: this.defaultSelected
    };
  },
  watch: {
    emptyCheckedBaggage (val) {
      if (val) {
        this.selected = false;
      }
    }
  },
  methods: {
    formatWeight (data) {
      return data + ' kg';
    },
    formatPrice (data) {
      const val = (data / 1).toFixed(0).replace('.', ',');
      return this.currency + ' ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    getIconURL (icon) {
      // const images = require.context('/icons/', false, /\.svg$/);
      return ('/icons/icon-baggage-' + icon + '.svg');
    },
    updateValue (value) {
      this.$parent.emptyCheckedBaggage = false;
      this.$emit('input', value);
    }
  }
};
</script>

<style lang="scss" scoped>
.baggage__item {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  margin:0 15px;
  padding: 0px;
  position: relative;
  background: #fff;
  text-align: center;
  cursor: pointer;

  .baggage__label {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    border-radius: var(--border-radius);
    border: none;
    box-shadow: inset 0px 0px 0px 1px var(--color-gray);
    cursor: pointer;
  }

  input:checked + label {
    border: none;
    box-shadow: inset 0px 0px 0px 2px  var(--color-primary);
    animation: boxShadowGrow .3s ease-in-out;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  .baggage__popular {
    width: 81px;
    height: 81px;
    overflow: hidden;
    position: absolute;
    top: -3px;
    right: -3px;

  &-text {
      background: var(--color-light-blue);
      color: #fff;
      text-transform: uppercase;
      font-size:12px;
      font-weight: 700;
      transform: rotate(45deg);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 115px;
      height: 20px;
      text-align: center;
      right: -18px;
      top: 65px;
      transform-origin: top right;

      &::before  {
        content: "";
        position: absolute;
        left: 3px;
        top: 100%;
        z-index: -1;
        border-left: 2px solid var(--color-primary);
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-top: 2px solid var(--color-primary);
      }

      &::after  {
        content: "";
        position: absolute;
        right: 6px;
        top: 100%;
        z-index: -1;
        border-left: 2px solid transparent;
        border-right: 2px solid var(--color-primary);
        border-bottom: 2px solid transparent;
        border-top: 2px solid var(--color-primary);
      }
    }
  }

  .baggage__icon {
    height: 100px;
    display: flex;
    align-content: center;
    justify-content: center;
    transition: all .2s ease-in-out;
    filter: grayscale(100%) brightness(100%) sepia(0%) hue-rotate(-200deg) saturate(100%) contrast(1);
  }

  .baggage__icon:hover, .baggage__item input:checked + label .baggage__icon {
    filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-200deg) saturate(500%) contrast(0.8);
  }

  .baggage__weight {
    padding-top: 25px;
    font-size: 22px;
    font-weight: 700;
    color: var(--color-dark);
    line-height: 28px;
  }

  .baggage__price {
    font-size: 14px;
    line-height: 20px;
    color: var(--color-primary);
  }

}

@media screen and (max-width: 768px) {
  .drag-scroll-carousel--mobile {
    display: block;
    width: calc(100% + 40px);
    max-width: calc(100% + 40px);
    margin-left: -20px;
    margin-right: -20px;
    /*flex: 1 0 calc(100% + 40px);
    width: calc(100% + 40px);
    max-width: calc(100% + 40px);
    margin-left: -20px;*/
  }

  .flickity-viewport {
    width: 100%;
  }

  .drag-scroll-carousel--mobile:after,  .carousel:after {
    content: 'flickity';
    display: none; /* hide :after */
  }

  .drag-scroll-carousel--mobile .baggage__item, .carousel-cell {
    flex: 1 0 calc(100% - 160px);
    max-width: calc(100% - 160px);
    width: 100%;
    min-width: 160px;
    margin: 0 0px;
    margin-right: 10px;
  }
}
</style>
