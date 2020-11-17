<template>
  <section class="container-fluid hero">
    <div class="container hero__container">
      <div class="row pb-5">
        <div class="col-md-6">
          <h2><span class="company-title"><span>H3</span>Tech</span> - <span class="company-slogen">Digital solutions for you</span></h2>
          <h1>Define. Design. Develope. Deploy.</h1>

          <p class="lead">
            Welcome visitor. This is our welcome text. We need some text content here to encourage You for contact us.
          </p>
          <p class="hero__cta">
            <button class="btn btn-secondary">Introduction</button>
            <button class="btn btn-primary">Get in touch</button>
          </p>
        </div>
        <div class="col-md-6">
          <!--<img src="/images/app_development_SVG.svg" alt="" class="hero__image"/>-->
        </div>
      </div>
    </div>
    <div class="hero__background"></div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-end;

  &__image {
    max-height: 65vh;
    z-index: 11;
  }

  &__container {
    position: relative;
    z-index: 10;

    color: $main-bg-color;

    h1 {
      font-size: 5em;
      line-height: 90%;
      margin-bottom: 25px;
    }

    h2 {

    }

    .company-title {
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 300;

      span {
        color: $color-brand;
        font-weight: 900;
      }
    }

    .company-slogen {
      font-weight: 300;

    }

    .lead {
      margin-bottom: 25px;
    }

    .hero__cta {
      .btn {
        font-size: 1.25rem;

        &:first-of-type {
          margin-right: 20px;
        }
      }
    }
  }

  &__background {
    @extend .section-absolute;
    @extend .section-background;
    @extend .section-background__dark-overlay;
    background-color: $color-dark;
    background-image: url(/images/pexels-hitesh-choudhary-340152.jpg);

  }
}
</style>
