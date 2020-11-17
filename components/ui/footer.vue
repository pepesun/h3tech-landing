<template>
  <footer class="container-fluid site-footer">

    <div class="container">
      <!-- Grid row -->
      <div class="row">

        <!-- Grid column -->
        <div class="col-md-6 mt-md-0 mt-3">

          <!-- Content -->
          <a class="navbar-brand" v-scroll-to="'#home'">
            <img class="site-footer__logo" src="/images/h3tech_logo_light.svg" alt="H3tech" />
            <span class="navbar-brand--strong">H3</span>Tech
            <span class="company-title">H-Trinotech Solutions Kft.</span>
          </a>
          <p>Footer content</p>

          <hr />

          © 2020 Copyright: H3Tech

        </div>


        <hr class="clearfix w-100 d-md-none pb-3">


        <div class="col-md-3 mb-md-0 mb-3">


          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>

        </div>

        <div class="col-md-3 mb-md-0 mb-3">


          <h5 class="text-uppercase">Credits</h5>

          <ul class="list-unstyled list-credits">
            <li>Photo by <strong><a href="https://www.pexels.com/@hiteshchoudhary?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">hitesh choudhary</a></strong> from <strong><a href="https://www.pexels.com/photo/adult-apple-device-business-code-340152/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong></li>
            <li>Photo by <strong><a href="https://www.pexels.com/@startup-stock-photos?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Startup Stock Photos</a></strong> from <strong><a href="https://www.pexels.com/photo/working-woman-person-technology-7375/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong></li>
            <li><strong><a href="https://www.pexels.com/hu-hu/@fauxels?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">fauxels</a></strong> fotója a <strong><a href="https://www.pexels.com/hu-hu/foto/emberek-dolgozo-macbook-ules-3183165/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong> oldaláról</li>
            <li>Photo by <strong><a href="https://www.pexels.com/@canvastudio?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Canva Studio</a></strong> from <strong><a href="https://www.pexels.com/photo/photo-of-people-using-laptop-3194521/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong></li>
            <li>Photo by <strong><a href="https://www.pexels.com/@startup-stock-photos?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Startup Stock Photos</a></strong> from <strong><a href="https://www.pexels.com/photo/ideas-whiteboard-person-working-7369/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong></li>
            <li>Photo by <strong><a href="https://www.pexels.com/@startup-stock-photos?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Startup Stock Photos</a></strong> from <strong><a href="https://www.pexels.com/photo/startup-planning-notes-mac-book-7357/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong></li>
            <li>Photo by <strong><a href="https://www.pexels.com/@thisisengineering?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">ThisIsEngineering</a></strong> from <strong><a href="https://www.pexels.com/photo/female-software-engineer-coding-on-computer-3861972/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong></li>
            <li>Photo by <strong><a href="https://www.pexels.com/@divinetechygirl?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Christina Morillo</a></strong> from <strong><a href="https://www.pexels.com/photo/person-looking-at-phone-and-at-macbook-pro-1181244/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong></li>
            <li>Photo by <strong><a href="https://www.pexels.com/@fauxels?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">fauxels</a></strong> from <strong><a href="https://www.pexels.com/photo/photo-of-people-doing-handshakes-3183197/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels">Pexels</a></strong></li>
            <li>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>
          </ul>

        </div>

      </div>
    </div>

  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  position: relative;
  z-index: 10;
  background: $color-black;
  color: $main-bg-color;
  padding: 60px 0;

  &:before {
    content: '';
    @extend .section-absolute;
    @extend .pattern-background;
    opacity: .15;
    background-size: 15%;
  }

  > * {
    position: relative;
    z-index: 2;
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

  .list-credits {
    font-size: .75em;
    line-height: 120%;

  }
}
</style>
