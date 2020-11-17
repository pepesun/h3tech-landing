<template>
  <div class="container cta-section">
    <div class="row  w-100 align-items-center">
      <div class="col-md-8">
        <h3>Do you have a great product idea? You need web solutions for your business?</h3>
         <h2>Let's talk about it together</h2>
      </div>
      <div class="col-md-4 text-right">
        <button class="btn btn-secondary">Get in touch with us</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta-section {
  position: relative;
  z-index: 2;
  background: $color-brand;
  color: $color-primary;
  border-radius: 10px;
  box-shadow: $shadow-medium;
  padding: 40px;
  max-width: 75%;
  display: flex;
  align-items: center;
  margin-top: -100px;
  margin-bottom: -100px;
  top: -75px;
  z-index: 100;

  h3 {
    font-size: 1.25em;
    font-family: $base-font-family;
  }

  h2 {
    font-size: 2.5em;
  }

  .btn {
    font-size: 1.25em;
  }

}
</style>
