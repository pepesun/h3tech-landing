<template>
  <header
    class="container-fluid fixed site-header site-header--dark"
    :class="scrolled ? 'shrinky' : null">
    <nav class="container navbar navbar-expand-lg">
      <a class="navbar-brand" v-scroll-to="'#home'">
        <img class="site-header__logo" src="/images/h3tech_logo_light.svg" alt="H3tech" />
        <span class="navbar-brand--strong">H3</span>Tech
        <span class="company-title">H-Trinotech Solutions Kft.</span>
      </a>
      <div class="collapse navbar-collapse ml-auto justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link " v-scroll-to="'#about'">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " v-scroll-to="'#services'">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " v-scroll-to="'#process'">Process</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " v-scroll-to="'#projects'">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " v-scroll-to="'#skills'">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " v-scroll-to="'#team'">Team</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-primary" v-scroll-to="'#contact'">Get in touch</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  data() {
    return {
      limitPosition: 80,
      scrolled: false,
      lastPosition: 0
    };
  },

  methods: {
    handleScroll() {

      if (this.limitPosition < window.scrollY) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      /*if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true;
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
        // move down
      }*/

      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 250;
    }
  },

  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
.site-header {
  @extend .section-fixed;
  background-color: transparent;
  bottom: auto;
  right: auto;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color .3s ease-in-out;

  &.shrinky {
    background-color: $color-primary;
  }

  .navbar {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .navbar-nav {
    align-items: center;

    .nav-item {
      .nav-link {
        cursor: pointer;
      }

      .btn {
        margin-left: 1em;
      }
    }
  }

  .navbar-brand {
    font-family: $heading-font-family;
    font-size: 2em;
    color: $color-dark-gray;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;

    .company-title {
      display: none;
      font-size: .875em;
      font-weight: 300;
      font-family: $base-font-family;
    }

    &--strong {
      display: inline;
      font-weight: 900;
      color: $color-brand;
    }
  }

  &__logo {
    max-height: 40px;
    margin-right: 10px;
    filter: drop-shadow(0px 2px 10px rgba(130, 180, 64, .8));
  }

  &--light {
    color: $color-primary;

    a {
      color: $color-primary;
    }
  }


  &--dark {
    color: $main-bg-color;

    a {
      color: $main-bg-color;
    }

    .navbar-brand {
      color: $main-bg-color;
    }
  }
}
</style>
