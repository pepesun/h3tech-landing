<template>
  <header class="site-header">
    <nav class="navigation container">
      <input id="navigationToggle" type="checkbox" class="navigation-toggle__checbkox" name="navigationToggle" />
      <label for="navigationToggle" class="navigation-toggle__label"><span></span></label>
      <ul class="navigation__list">
        <li v-for="(item, index) in navItems" :key="index" :id="'navItem_' + index" class="navigation__item">
          <a :href="item.url" :class="{'navigation__link--has-submenu': item.hasSubMenu}" class="navigation__link">
            <img :src="item.iconBefore" v-if="item.iconBefore" :alt="item.title" class="navigation__icon">
            {{ item.title }}
            <img :src="item.iconAfter" v-if="item.iconAfter" :alt="item.title" class="navigation__icon">
          </a>
        </li>
      </ul>
      <div class="navigation__logo">
        <img src="/icons/wizz-logo-white.svg" alt="WizzAir" class="navigation__logo-image" />
      </div>
      <div class="navigation__authenticate mobile-only">
        <button class="button__authenticate button--link text--white text--uppercase">
          Sign in <img src="/icons/icon-lock.svg" alt="WizzAir" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        {
          title: 'Plan',
          url: '#',
          hasSubMenu: true,
          iconBefore: '',
          iconAfter: ''
        },
        {
          title: 'Information',
          url: '#',
          hasSubMenu: true,
          iconBefore: '',
          iconAfter: ''
        },
        {
          title: 'Check-in & Bookings',
          url: '#',
          hasSubMenu: false,
          iconBefore: '',
          iconAfter: ''
        },
        {
          title: 'Sign In',
          url: '#',
          hasSubMenu: false,
          iconBefore: '',
          iconAfter: ''
        },
        {
          title: 'English (GBP)',
          url: '#',
          hasSubMenu: true,
          iconBefore: '/icons/icon-flag-en.svg',
          iconAfter: ''
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  padding: 13px 0;
  display: flex;

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-left: auto;
  }

  &__item {
    display: inline-flex;
    height: 34px;
    border-right: 2px solid #201DBC;

    &:last-of-type {
      border-right: none;
    }

  }

  &__link {
    color: var(--color-light);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    padding:0 10px;
    display: flex;
    align-items: center;

    &--has-submenu {
      position: relative;
      padding-right: 27px;

      &:after {
        position: absolute;
        top: calc(50% - 6px);
        right: 10px;
        width: 12px;
        height: 12px;
        content: url(/icons/icon-arrow-down.svg);
        display: flex;
        align-items: center;
        justify-content: center;
      }

    }

    &__icon {
      padding-right: 13px;
    }

  }

  &-toggle__label, &__logo, &-toggle__checbkox {
    display: none;
  }

}

@media screen and (max-width: 768px) {
  .navigation {

    &.container {
      height: 60px;
      margin-left: 20px;
      margin-right: 20px;
    }
    .navigation-toggle {

      &__checbkox {
        display: none;

        &:checked {

          & ~ .navigation__list {
            opacity: 1;
            left: 0;
          }

          & + label {

            span {
              background: transparent;

              &:before {
                top: calc(50% - 2px/2 - 0px);
                transform: rotate(45deg);
                left: 0;
              }

              &:after {
                top: calc(50% - 2px/2 + 0px);
                transform: rotate(-45deg);
                left: 0;
              }
            }

          }

        }

      }

      &__label {
        position: relative;
        width: 40px;
        height: 40px;
        display: inline-block;
        cursor: pointer;

        span, span:before, span:after {
          width: 18px;
          height: 2px;
          background: #fff;
          border-radius: var(--border-radius);
          display: inline-block;
          left: 50%;
          top: calc(50% - 2px/2);
          transform: translateX(-50%);
          position: absolute;
          transition: all .3s var(--cubic-bezier);
        }

        span:before, span:after {
          content: '';
          position: absolute;
          transform-origin: center center;
        }

        span {

          &:before {
            top: calc(50% - 2px/2 - 5px);
          }

          &:after {
            top: calc(50% - 2px/2 + 5px);
          }
        }
      }

    }

    &__list {
      opacity: 0;
      position: fixed;
      left: -100%;
      top: 60px;
      height: 100%;
      background: var(--color-dark);
      z-index: 10;
      width: 100%;
      display: flex;
      flex-direction: column;
      transition: all .3s var(--cubic-bezier);
    }

    &__item {
      height: auto;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    &__link {
      font-size: 1em;
      padding: 20px;
      text-align: center;
      display: inline-block;
      width: 100%;
    }

    &__logo{
      margin: 0 auto;
      display: inline-block;

      &-image {
        max-height: 40px;
      }
    }

    &__authenticate {
      font-weight: 700;
      font-size: 12px;
      display: flex;
      align-items: center;
    }

    .button__authenticate {
      display: flex;
      align-items: center;

      img {
        margin-left: 10px;
      }

    }

  }

}
</style>
