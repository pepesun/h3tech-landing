<template>
  <section class="container-fluid services">
    <div class="container services__container pb-5">
      <div class="row">
        <div class="col-md-12">
          <h3 class="heading--pretext">...what we do</h3>

          <h2 class="section-title">Services</h2>

          <p class="lead">
            Short copy about services and about force the user to get in touch with us and call for any web development.
            Short copy about services and about force the user to get in touch with us and call for any web development.
            Short copy about services and about force the user to get in touch with us and call for any web development.
            Short copy about services and about force the user to get in touch with us and call for any web development.
          </p>

          <div class="row services__row my-5 mx-auto">
            <div class="col-md-6"
              v-for="(service, index) in services"
              :key="index"
              :style="{zIndex:100 - index}">
              <div
                class="service__card"
                :class="selected === index ? 'active' : null"
                @click="toggleCard(index)">
                <div class="service__card--left">
                  <div class="service__card--counter">{{index + 1}}</div>
                  <h3 class="service__card--title">{{service.name}}</h3>
                </div>

                <div class="service__card--right">
                  <div class="service__card--icon">
                    <img :src="'/images/' + service.icon" :alt="'H3Tech - ' + service.name" />
                  </div>
                </div>
                <div
                  class="service__card--description"
                  :class="selected === index ? 'active' : null"
                  >
                  <div class="service__card--description--scroller">
                    <h3 class="service__card--title">{{service.name}}</h3>
                    <div v-html="service.description" />
                  </div>
                  <button class="close"><b-icon-x-circle class="text-light"/></button>
                </div>
              </div>
            </div>
          </div>

          <h3 class="text-right">Interested in our services? Or do you have a great idea that needs to be delivered?</h3>
          <p class="text-right mt-5">
            <button class="btn btn-primary">Let's talk about it!</button>
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    selected: null,
    services: [
      {
        name: 'Web development',
        icon: 'icon-coding.svg',
        description: `
Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        `
      },
      {
        name: 'Graphic design',
        icon: 'icon-planning.svg',
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        name: 'Big Data',
        icon: 'icon-web.svg',
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        name: 'Mobile applications',
        icon: 'icon-marketing.svg',
        description: 'Lorem ipsum dolor sit amet'
      },
      {
        name: 'ERP',
        icon: 'icon-login.svg',
        description: 'Integrated management of main business processes'
      },
      {
        name: 'Auditing and testing',
        icon: 'icon-auditing.svg',
        description: 'Integrated management of main business processes'
      },
      {
        name: 'Server configuration and technical support',
        icon: 'icon-site-map.svg',
        description: 'Integrated management of main business processes'
      },
      {
        name: 'Video streaming',
        icon: 'icon-website.svg',
        description: 'Integrated management of main business processes'
      },
      {
        name: 'Other software development',
        icon: 'icon-cpu.svg',
        description: 'Integrated management of main business processes'
      },
    ]
  }),

  methods: {
    toggleCard (index) {

      if (this.selected === index) {
        this.selected = null
        return
      }
      this.selected = index;
    }
  }
}
</script>

<style lang="scss" scoped>
.services {
  position: relative;
  z-index: 2;
  background: $color-dark;
  color: $main-bg-color;
  > * {
    position: relative;
    z-index: 2;
  }

  &:before {

    content: '';
    @extend .section-absolute;
    @extend .pattern-background;
    opacity: .15;
    background-size: 15%;
    z-index: 1;
  }

  &__row {
    max-width: 1200px;
  }

  .service__card {
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    box-shadow: $shadow-medium;
    background-color: $color-black;
    display: flex;
    margin-bottom: 30px;
    padding: 40px;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover, &.active {
      background-color: $color-brand;
      color: $color-black;
      padding: 45px;

      .service__card--icon {
        img {
          filter: brightness(0);
          right: -5px;
          top: 15px;
        }
      }
    }

    &--left, &--right {
      flex: 1 0 50%;
      max-width: 50%;
      width: 50%;
      flex-wrap: wrap;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    &--right {
      text-align: right;
    }

    &--counter {
      font-size: 3em;
      font-weight: 100;
      opacity: .3;
      width: 100%;
      flex-grow: 1;
    }

    &--title {
      font-weight: 900;
      font-size: 1.5em;
      width: 100%;
      flex-shrink: 0;
      margin: 0;
      line-height: 1;
    }

    &--icon {
      width: 100%;

      img {
        max-width: 150px;
        max-height: 75px;
        filter: brightness(1);
        transition: all .6s ease-in-out;
        top: 0;
        right: 0;
        position: relative;
      }
    }

    &--description {
      display: block;
      position: absolute;
      z-index: 15;
      width: calc(100% - 5px);
      min-height: calc(100% - 5px);
      box-shadow: 0px 0px 40px $color-brand;
      background-color: $color-black;
      top: 5px;
      left: 5px;
      border-radius: 10px;
      padding: 20px;
      opacity: 0;
      transition: all .3s $cubic-bezier;
      transform: scale(.8);

      .close {
        position: absolute;
        top: 5px;
        right: 5px;
      }

      &.active {
        display: block;
        opacity: 1;
        transform: scale(1);
        color: $color-light;
      }
    }
  }
}
</style>
