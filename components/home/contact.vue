<template>
  <section class="container-fluid contact">
    <div class="container contact__container pb-5">
      <div class="row">
        <div class="col-md-12">
          <h3 class="heading--pretext text-center">...have your project in your mind?</h3>

          <h2 class="section-title text-center">Contact us</h2>

          <div class="row  my-5 contact__section">
            <div class="col-md-8 contact__form">
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form-row">

                <b-form-group
                  id="input-group-2"
                  label="Your name"
                  label-for="input-2"
                  class="col-md-6"
                  >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-1"
                  label="Your email"
                  label-for="input-1"
                  class="col-md-6"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Your phone"
                  label-for="input-2"
                  class="col-md-6"
                  >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter phone number"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Company name or website address"
                  label-for="input-2"
                  class="col-md-6"
                  >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name or website link"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="What services are you interested in?"
                  class="col-md-12">
                  <b-form-checkbox-group
                    v-model="form.selectedServices"
                    :options="form.services"
                    name="buttons-1"
                    buttons
                  ></b-form-checkbox-group>
                </b-form-group>

                <b-form-group
                  label="Message"
                  class="col-md-12">
                    <b-form-textarea
                      id="textarea-auto-height"
                      placeholder="Enter something..."
                      rows="3"
                      max-rows="8"
                    ></b-form-textarea>
                </b-form-group>

                <b-form-group class="text-right w-100">
                  <b-button type="reset" variant="danger" class="text-dirty-white ">Reset</b-button>
                  <b-button type="submit" variant="primary">Send message <b-icon-arrow-right-short /></b-button>
                </b-form-group>
              </b-form>

            </div>
            <div class="col-md-4 d-flex flex-column contact__right">
              <div class="content">
                <h4>H-Trinotech Solutions Kft.</h4>
                <p>
                  <b-icon-geo-alt /> Budapest, Helsinki út 1, 1203 <br />
                  <b-icon-envelope /> info@h3tech.hu<br />
                  <b-icon-telephone /> +36 20 999 1310

                </p>
              </div>
              <div class="content content__map">
                <client-only>
                  <Map />
                </client-only>
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
  components: {
    Map: () => process.client ? import('@/components/home/map') : null
  },

  data: () => ({
    show: true,
    form: {
      email: '',
      name: '',
      food: null,
      checked: [],
      selectedServices: [],
      services: [
        { text: 'web', value: 'web' },
        { text: 'big data', value: 'big_data' },
        { text: 'mobile', value: 'mobile' },
        { text: 'erp', value: 'erp' },
        { text: 'auditing and testing', value: 'testing' },
        { text: 'servers', value: 'servers' },
        { text: 'video', value: 'video' },
        { text: 'other', value: 'other' },
      ]
    },
  }),

  methods: {

    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },

    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  z-index: 2;
  background: $color-primary;
  color: $color-light;

  > * {
    position: relative;
    z-index: 2;
  }

  &__section {
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
    max-width: 1100px;
    margin: 30px auto;

    .content {
      padding:25px 10px;

      &__map {
        flex: 1 1 auto;
        padding-top: 0;
      }

      p {
        line-height: 150%;
        font-size: 1.1em;

        .b-icon {
          color: $color-brand;
        }
      }
    }
  }

  &__form {

    form {
      padding: 25px;
    }
  }

    /deep/ label, /deep/ .col-form-label {
      font-size: .875em;
      font-weight: 300;
    }

  .form-group {
    margin-bottom: 1.5em;

    .form-control {
      background:$color-primary;
      border-radius: 20px;
      border: none;
      outline: none;
      color: $color-light;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $color-light;
      opacity: .5; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: $color-light;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: $color-light;
    }
  }

  /deep/ .btn-group {
   & > .btn {
      padding: 5px 10px;
      display: inline-flex;
      align-items: center;
      font-size: .875em;
      font-weight: normal;

      &.focus, &:focus {
        background-color: darken($color-primary, 10%);
        box-shadow: none;
      }

      &.active {
        background-color:$color-brand;
      }


    }
  }

  &__right {
    background: rgba(255,255,255,0.1);
    background: $main-bg-color;
    overflow: hidden;
    border-radius: 0 10px 10px 0;
    color: $color-primary;
  }
}
</style>
