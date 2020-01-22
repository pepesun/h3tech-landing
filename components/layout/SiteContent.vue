<template>
  <main class="site-content">
    <div class="container">
      <div class="mobile-only">
        <div class="navigation">
          <button
            class="button--link text--pink text--uppercase text--underline
            display-flex align-items--center margin-bottom--20"
          >
            <img src="/icons/icon-arrow-down-colored.svg" class="margin-right--5 rotate--left" />
            <strong>
              back
            </strong>
          </button>
        </div>
      </div>
      <h1 class="title">
        Passengers and baggages
      </h1>

      <div class="white-box">
        <div class="form-block">
          <h3 class="form-block__title form-block__title--upper-position">
            <span class="form-block__avatar">
              <img :src="`/icons/icon-avatar-${gender}.svg`" class="form-block__avatar-icon">
            </span>
            <span class="form-block__title--small">
              1. Passenger (adult) <span v-if="passengerFullName" v-html="passengerFullName" />
            </span>
          </h3>

          <div class="form-block__header" />

          <div class="display-flex  mobile--wrap">
            <div class="form-block__inputs passenger-name">
              <div class="form-block__input-group form-block__input-group--first">
                <input
                  id="passengerFirstName"
                  v-model="passengerFirstName"
                  type="text"
                  class="form-block__input"
                  name="passengerFirstName"
                  required
                >
                <label class="form-block__label" for="passengerFirstName">First name</label>
              </div>
              <div class="form-block__input-group form-block__input-group--last">
                <input
                  id="passengerLastName"
                  v-model="passengerLastName"
                  type="text"
                  class="form-block__input"
                  name="passengerLastName"
                  required
                >
                <label class="form-block__label" for="passengerLastName">First name</label>
              </div>
            </div>

            <div class="mobile-only">
              <div class="form-block__helper">
                <i class="tooltip tooltip--inverse tooltip--no-content">i</i>
                Please add your name as in the Travel document. You can only use the letters of the English alphabet.
              </div>
            </div>
            <div class="form-block__inputs passenger-gender">
              <div class="form-block__input-group form-block__input-group--first input-radio">
                <input
                  id="female"
                  v-model="gender"
                  type="radio"
                  class="form-block__input--radio"
                  name="gender"
                  value="female"
                >
                <label class="form-block__label--radio" for="female">Female</label>
              </div>
              <div class="form-block__input-group form-block__input-group--last  input-radio">
                <input
                  id="male"
                  v-model="gender"
                  type="radio"
                  class="form-block__input--radio"
                  name="gender"
                  value="male"
                  checked
                >
                <label class="form-block__label--radio" for="male">Male</label>
              </div>
            </div>
          </div>
          <div class="form-block__paragraph special-assistance mobile--wrap">
            <button
              @click="showModal(specialAssistanceModalContent)"
              class="button--link text--pink text--uppercase text--underline"
            >
              <strong>Special assistance?</strong>
            </button>
            Fill out your name and activate your Privilege Pass!
          </div>
        </div>

        <div class="divider margin-bottom--30 margin-top--10" />

        <div class="form-block">
          <div class="form-block__inputs">
            <div class="form-block__input-group input-checkbox">
              <input
                id="bothWays"
                type="checkbox"
                class="form-block__input--checkbox"
                name="bothWays"
                value="accept"
                checked
              >
              <label class="form-block__label--checkbox" for="bothWays">
                <strong>I select the same for both ways</strong>
              </label>
            </div>
          </div>
        </div>

        <div class="form-block">
          <h3 class="form-block__title">
            Checked-in baggages<i class="tooltip" data-content="Disclaimer of checked-in baggages">i</i>
          </h3>

          <flickity
            ref="flickity"
            :options="dragScrollOptions"
            class="form-block__inputs margin-bottom--20 drag-scroll-carousel--mobile"
          >
            <baggageItem
              v-for="(baggage, index) in checkinBaggages"
              :key="index"
              :baggage="baggage"
              v-model="selectedCheckInBaggage"
              :emptyCheckedBaggage="emptyCheckedBaggage"
              :defaultSelected="defaultSelectedCheckedInBaggage"
              currency="Ft"
              group-name="checkinBaggages"
            />
          </flickity>

          <div class="form-block__inputs margin-bottom--30">
            <div class="form-block__input-group input-checkbox">
              <input
                id="checkedBagDisable"
                v-model="emptyCheckedBaggage"
                type="checkbox"
                class="form-block__input--checkbox"
                name="checkedBagDisable"
                value="accept"
              >
              <label class="form-block__label--checkbox" for="checkedBagDisable">
                <strong>I don't want to carry a checked-in bag</strong>
              </label>
            </div>
          </div>

          <accordion
            :isOpen="false"
            class-name="margin-bottom--25"
            title="travel with sport equipment"
            content="<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
              amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
              est. Mauris placerat eleifend leo.</p>"
          />
        </div>

        <div class="divider" />

        <div class="form-block">
          <h3 class="form-block__title">
            Cabin baggage
          </h3>

          <div class="form-block__inputs form-block__inputs--wrap margin-bottom--20">
            <cabinBaggage
              v-for="(item, index) in cabinBaggages"
              :key="index"
              :item="item"
              :divider="true"
              v-on:refreshVal="updateCabinBaggageStatus"
              :selected="selectedCabinBaggage"
            />
          </div>

          <accordion
            :isOpen="false"
            class-name="margin-bottom--25"
            title="Details of carry on bag"
            content="<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
              ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
              amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
              est. Mauris placerat eleifend leo.</p>"
          />
        </div>

        <div class="divider" />

        <div class="form-block margin-top--50 margin-bottom--50 align-items--center form-block__pagination">
          <button @click="showModal(finishModalContent)" class="button--primary">
            Next
          </button>

          <div class="margin-left--auto">
            <button @click="showModal(addToAllModal)" class="button--link text--uppercase text--underline text--pink">
              <strong>add same to all passengers</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
    <modal v-show="isModalVisible" @close="closeModal" :modalContent="selectedModalContent" />
  </main>
</template>

<script>
import baggageItem from '~/components/ui/baggageItem';
import cabinBaggage from '~/components/ui/cabinBaggage';
import accordion from '~/components/ui/accordion';
import modal from '~/components/ui/modal';

export default {
  components: { baggageItem, cabinBaggage, accordion, modal },
  data () {
    return {
      totalPrice: 41890,
      gender: 'male',
      passengerFirstName: null,
      passengerLastName: null,
      emptyCheckedBaggage: false,
      defaultSelectedCheckedInBaggage: 'small',
      selectedCheckInBaggage: null,
      checkinBaggages: [
        {
          title: 'small',
          weight: 10,
          price: 20600,
          isPopular: false
        },
        {
          title: 'medium',
          weight: 20,
          price: 48900,
          isPopular: true
        },
        {
          title: 'large',
          weight: 32,
          price: 61200,
          isPopular: false
        }
      ],
      cabinBaggages: [
        {
          title: '2 carry on bags <span class="text--blue">with WIZZ Priority</span>',
          description: `
            <ul>
              <li>bring both on board</li>
              <li>priority boarding included</li>
              <li><strong class="text--blue">only 4 left on this flight</strong></li>
            </ul>
          `,
          icon: '/icons/icon-carryon-baggage-multi.svg',
          price: 1890,
          buttonText: 'Add for Ft1,890<small class="button-text--small">/person</small>',
          buttonAction: '',
          value: 'multi'
        },
        {
          title: '1 carry on bag',
          description: `
            <ul>
              <li>max. 40 × 30 × 20 cm</li>
              <li>max. 10 kg</li>
            </ul>
          `,
          icon: '/icons/icon-carryon-baggage-single.svg',
          price: 0,
          buttonText: 'Add for free',
          buttonAction: '',
          value: 'single'
        }
      ],
      selectedCabinBaggage: null,
      isModalVisible: false,
      selectedModalContent: null,
      specialAssistanceModalContent: `
        <h1>HTML Ipsum Presents</h1>

        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
        amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae
        est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
        pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit
        amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar
        facilisis. Ut felis.</p>

        <h2>Header Level 2</h2>

        <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
        Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa.
        Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis
        elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

        <h3>Header Level 3</h3>

        <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
      `,
      addToAllModal: `
        <h1 class="text--align-center"><img src="/icons/icon-check.svg" /> Added to all passengers</h1>
        <p class="text--align-center">You can close this window</p>
      `,
      finishModalContent: `
        <h1 class="text--align-center">Sorry, no more steps. Thanks for watching me!</h1>
        <h2 class="text--align-center">Here's a flying potato:</h2>
        <p class="text--align-center">
        <img src="/flying-potato.png" />
        </p>
      `,
      dragScrollOptions: {
        initialIndex: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        watchCSS: true
      }
    };
  },
  computed: {
    passengerFullName () {
      const hasFirstName = this.passengerFirstName !== null && this.passengerFirstName !== '';
      const hasLastName = this.passengerLastName !== null && this.passengerLastName !== '';

      return hasFirstName || hasLastName ? `<i>${this.passengerFirstName} ${this.passengerLastName}</i>` : '';
    }
  },
  watch: {
    emptyCheckedBaggage (val) {
      if (val) {
        this.selectedCheckInBaggage = false;
      }
    }
  },
  methods: {
    updateCabinBaggageStatus (val) {
      this.selectedCabinBaggage = val;
    },
    showModal (content) {
      this.selectedModalContent = content;
      this.isModalVisible = true;
    },
    closeModal () {
      this.isModalVisible = false;
    }
  }
};
</script>

<style lang="scss">

.title {
  font-size: 40px;
  color: var(--color-primary);
  font-weight: 300;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  width: 100%;
}

.white-box {
  background: var(--color-light);
  box-shadow: var(--shadow-medium);
  min-height: 500px;
  width: 100%;
  margin-top: 40px;
}

.form-block {
  padding: 0px 50px 0 50px;
  display: flex;
  flex-wrap: wrap;

  &__header,  &__input-group, &__inputs {
    width: 100%;
    flex: 1 0 100%;
    max-width: 100%;
    display: flex;
  }

  &__inputs--wrap {
    flex-wrap: wrap;
  }

  &__title {
    font-size: 32px;
    line-height: 38px;
    color: var(--color-primary);
    font-weight: 300;
    margin: 40px 0;
    width: 100%;
    &--small {
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      font-weight: 700;
    }
    &--medium {
      font-size: 16px;
      color: var(--color-dark);
      font-weight: 700;

    }
    &--upper-position {
      position: relative;
      margin-top: -20px;
      margin-bottom: 14px;
    }
  }

  &__avatar {
    width: 56px;
    flex: 1 0 56px;
    max-width: 56px;
    height: 56px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-gray);
    background: #fff;
    margin-right: 14px;

    &-icon {
      width: 30px;
      height: 34px;
    }

  }

  &__input-group {
    position: relative;

    &--first .form-block__input,
    &--first .form-block__label--radio {
      border-radius: 3px 0 0 3px;
    }
    &--first {
      .form-block__label--radio {
        border-right: 2px solid var(--color-secondary);
      }
    }
    &--last .form-block__input,
    &--last .form-block__label--radio {
      border-radius: 0 3px 3px 0;
      border-left: none!important;
    }

  }

  &__label {

    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: var(--color-dark-gray);
    transition: all .2s var(--cubic-bezier);
    &--radio {
    text-align: center;
    border-width: 2px;
    position: relative;
    padding: 23px 10px;
    transition: all .3s ease-in-out;
    cursor: pointer;
      &:before {
        display: inline-block;
        content: url(/icons/icon-check.svg);
        opacity: 0;
        padding-right: 0px;
        transition: all .2s var(--cubic-bezier);
        position: absolute;
        left: -20px;
        top: calc(50% - 10px);
      }

    }

  }

  &__input, &__label--radio {
    width: 100%;
    border-radius: 3px;
    border: 1px solid var(--color-dark-gray);
    height: 70px;
    padding: 23px 16px;
    font-size: 14px;
    color: var(--color-primary);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__input {

    &:invalid {
      box-shadow: none;
    }

    &:valid + .form-block__label,
    &:focus + .form-block__label {
      top: 0px;
      transform: translateY(0);
      opacity: .75;
      font-size: .75em;
      color: var(--color-secondary);
    }

    &--radio, &--checkbox {
      opacity: 0;
      position: absolute;
      top: -9999px;
      left: -9999px;
      display: none;
    }

      &--radio {

        &:checked {

          & ~ label {
          color: var(--color-secondary);
          border: 2px solid var(--color-secondary);
          animation: boxShadowGrowOnlyOutside .3s ease-in-out;
          padding-left: 20px;
            &:before {
            display: inline-block;
            padding-right: 5px;
            opacity: 1;
            left: 10px;
            }

          }

        & ~ .form-block__label--no-icon {

          &:before {
            content: none;
          }

        }

      }

    }

    &--checkbox {

      & + label {

        display: flex;
        align-items: center;
        padding-left: 32px;
        cursor: pointer;

        &:before {
          content: '';
          width: 18px;
          height: 18px;
          border-radius: 3px;
          border: 2px solid var(--color-dark-gray);
          display: inline-flex;
          background-color: #fff;
          transition: background-color, border .2s ease-in-out;
          position: absolute;
          top: 0;
          left: 0;
        }

        &:after {
          content: url(/icons/icon-check.svg);
          filter: brightness(0) invert(1);
          position: absolute;
          width: 20px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          top: -2px;
          left: -1px;
          opacity: 0;
          transform: scale(0);
          transition: all .3s var(--cubic-bezier);
        }

      }

      &:checked {

        & + label {

          &:before {
            background-color: var(--color-secondary);
            border-color: var(--color-secondary);
            transition: background-color, border .4s ease-in-out;
          }

          &:after {
            opacity: 1;
            transform: scale(1);
          }

        }
      }

      &--circle {
        & + label {
          &:before {
            content: '';
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: none;
            display: inline-flex;
            background-color: var(--color-gray);
            transition: background-color, border .2s ease-in-out;
            position: absolute;
            top: 4px;
            left: 0;
          }
          &:after {
            content: '';
            filter: unset;
            position: absolute;
            width: 10px;
            height: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-primary);
            border-radius: 50%;
            top: 7px;
            left: 3px;
            opacity: 1;
            transform: none;
            transition: all .3s var(--cubic-bezier);
          }
        }
        &:checked {
          & + label {
            &:before {
              background-color: var(--color-primary);
              transition: background-color .4s ease-in-out;
            }
            &:after {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      }

    }

  }

  &__paragraph {
    margin-top: 13px;
    font-size: 12px;
    color: var(--color-dark);
  }
  &__helper {
    display: flex;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-dark-gray);
    margin: 7px 0 20px 0;
    .tooltip {
      position: static;
      margin-right: 8px;
    }
  }

  .passenger-name {
    width: 100%;
    max-width: calc(100% - 220px);
    flex: 1 0 100%;
  }
  .passenger-name .form-block__input-group,
  .passenger-gender .form-block__input-group {
    flex: 1 0 50%;
    max-width: 50%;
    width: 50%;
  }
  .passenger-gender {
    margin-left: auto;
    max-width: 200px;
    flex: 1 0 100%;
    width: 100%;
  }

  .special-assistance {
    strong {
      margin-right: 21px;
    }
  }

}

.site-content {
  display: flex;
  flex-wrap: wrap;
  width:  100%;
}

@media screen and (max-width: 768px) {

  .form-block {

    padding: 0px 20px 0 20px;
    .passenger-name, .passenger-gender {
      flex: 1 0 100%;
      max-width: 100%;
    }

    &__input--checkbox + label {
      font-size: 12px;
    }

    &__pagination {
      .button--primary {
        width: 100%;
        order: 2;
      }

      .button--link {
        font-size: 12px;
        order: 1;
      }

      div {
        width: 100%;
        margin-bottom: 30px;
        text-align: center;
      }
    }

  }

  .drag-scroll-carousel--mobile {
    display: block;
    width: calc(100% + 40px);
    max-width: calc(100% + 40px);
    margin-left: -20px;
    margin-right: -20px;
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
