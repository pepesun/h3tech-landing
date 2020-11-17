<template>
  <section class="container-fluid referencies">
    <div class="container referencies__container pb-5">
      <div class="row">
        <div class="col-md-12">
          <h3 class="heading--pretext">...take a look at our referencies</h3>

          <h2 class="section-title">Projects</h2>

          <p class="lead">
            Lead text for referencies. Thereafter rose Desire in the beginning, Desire the primal seed and germ of Spirit,
            Sages who searched with their heart's thought discovered the existent's kinship in the non-existent.
          </p>

          <div class="row my-5">
            <div
              class="col-md-6"
              v-for="(item, index) in referencies" :key="'referencies_' + index">
              <div class="card">
                <div class="card__image">
                  <img :src="'/images/' + item.image" :alt="item.name" />
                </div>
                <div class="card__content">
                  <div class="card__infos">
                    <span v-if="item.client"><b-icon-building /> {{item.client}}</span>
                    <span v-if="item.category"><b-icon-code-slash /> {{serviceTypes[item.category]}}</span>
                    <span v-if="item.date"><b-icon-clock /> {{item.date}}</span>
                  </div>
                  <div class="card__row">
                    <div class="card__title-block">
                      <h3 class="card__title">{{item.name}}</h3>
                      <div class="card__description" v-if="item.short">{{item.short}}</div>
                    </div>

                    <div class="card__action" v-if="item.link">
                      <a :href="item.link" class="btn btn-primary" target="_blank">Open</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    serviceTypes:
      {'web_development':'Web development' }
    ,
    referencies: [
      {
        name: 'H3Tech Landing Page',
        short: 'One pager for web agency. Scope was to introduce all services and the team.',
        image: '/referencies/h3tech_landing.png',
        client: 'H-Trinotech Solutions Kft.',
        date: '2020',
        category: 'web_development',
        link: 'https://localhost:5000'
      },
      {
        name: 'pullstart.tv',
        short: 'One pager for web agency. Scope was to introduce all services and the team.',
        image: '/referencies/pullstart.png',
        client: 'Pullstart',
        date: '2020',
        category: 'web_development',
        link: 'https://pullstart.tv'
      },
      {
        name: 'H3Tech Landing Page',
        short: 'One pager for web agency. Scope was to introduce all services and the team.',
        image: '/referencies/h3tech_landing.png',
        client: 'H-Trinotech Solutions Kft.',
        date: '2020',
        category: 'web_development',
        link: ''
      },
      {
        name: 'H3Tech Landing Page',
        short: 'One pager for web agency. Scope was to introduce all services and the team.',
        image: '/referencies/h3tech_landing.png',
        client: 'H-Trinotech Solutions Kft.',
        date: '2020',
        category: 'web_development',
        link: ''
      },
      {
        name: 'H3Tech Landing Page',
        short: 'One pager for web agency. Scope was to introduce all services and the team.',
        image: '/referencies/h3tech_landing.png',
        client: 'H-Trinotech Solutions Kft.',
        date: '2020',
        category: 'web_development',
        link: ''
      },
      {
        name: 'H3Tech Landing Page',
        short: 'One pager for web agency. Scope was to introduce all services and the team.',
        image: '/referencies/h3tech_landing.png',
        client: 'H-Trinotech Solutions Kft.',
        date: '2020',
        category: 'web_development',
        link: ''
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
.referencies {
  position: relative;
  z-index: 2;
  background: $color-light;
  color: $color-primary;

  > * {
    position: relative;
    z-index: 2;
  }

  &:before {

    content: '';
    @extend .section-absolute;
    @extend .pattern-background;
    opacity: .05;
    background-size: 10%;
    z-index: 1;
  }

  .card {
    border: none;
    background: transparent;
    margin-bottom: 60px;

    &__image {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: $shadow-medium;
      position: relative;

      &:before {
        transition: all .3s ease-in-out;
        @extend .section-absolute;
        content: '';
        background: $color-gradient-base;
        opacity: .8;
      }
    }

    &__content {
      background: $color-light;
      position: relative;
      z-index: 10;
      border-radius: 10px;
      box-shadow: $shadow-medium;
      padding:15px 30px;
      width: 90%;
      margin: -30px 5% 0 5%;
      transition: all .25s $cubic-bezier;

      h3 {
        margin-bottom: 0;
        margin-top: 5px;
      }
    }

    &__infos {
      font-size: .875em;
      opacity: .75;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 100%;

      span {
        flex: 1 1 auto;
        text-align: center;

        .b-icon {
          color: $color-brand;
        }

        &:first-of-type {
          text-align: left;
        }

        &:last-of-type {
          text-align: right;
        }
      }
    }

    &__row {
      display: flex;
      align-items: flex-end;
    }

    &:hover {
      .card__image {
        box-shadow: $shadow-light;

        &:before {
          opacity: 0;
        }
      }

      .card__content {
        transform: scale(1.05) translateY(-20px);
      }
    }
  }
}
</style>
