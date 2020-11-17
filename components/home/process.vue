<template>
  <section class="container-fluid process">
    <div class="container process__container mb-5 pb-5">
      <div class="row">
        <div class="col-md-12">


          <div class="row steps__description align-items-center mb-3">
            <div class="col-md-6">
              <h3 class="heading--pretext">...how we work together</h3>

              <h2 class="section-title">Process</h2>

              <p class="lead">
                Few word about our processes.
              </p>
              <div class="card">
                <div class="card__navigation">
                  <button
                    class="btn btn-link"
                    :class="activeStep <=0 ? 'inactive' : null "
                    @click="setActiveStep(activeStep - 1)"
                    >
                    <b-icon-arrow-left-short />
                  </button>
                  <button
                    class="btn btn-link"
                    :class="activeStep >= steps.length - 1 ? 'inactive' : null "
                    @click="setActiveStep(activeStep + 1)"
                    >
                    <b-icon-arrow-right-short />
                  </button>
                </div>
                <h3>{{steps[activeStep].title}}</h3>
                {{steps[activeStep].description}}
              </div>

            </div>
            <div class="col-md-6">
              <figure
                class="image image--dotted image-dotted-top-right"
                :style="{transform: 'rotate(' + randomRotate + 'deg)'}"
                >
                <img :src="'/images/' + steps[activeStep].image" />
              </figure>
            </div>

          </div>

          <div class="steps__block">
            <div class="steps__block--steps">
              <div
                class="steps__block--steps--step"
                :class="activeStep === index ? 'active' : null"
                v-for="(step, index) in steps"
                :key="index">
                <div
                  class="steps__block--steps--step--label"
                  @click="setActiveStep(index)">
                  {{step.title}}
                </div>
              </div>
            </div>
            <div class="steps__block--progress-bar">
              <div
                class="steps__block--progress-bar--indicator"
                :style="{transform: 'translateX(' + (stepOffsets[activeStep] - 10)+ 'px)'}"
              ></div>
              <div
                :style="{width: stepOffsets[activeStep] + 'px'}"
                class="steps__block--progress-bar--progress"
              ></div>
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
    stepOffsets: [],
    activeStep: 0,
    randomRotate: 3,
    steps: [
      {
        title: 'Interview',
        description: 'Portrait of a Man is an oil-on-poplar painting from about 1475 by the Italian Renaissance artist Antonello da Messina. The work portrays an unknown man, whose garments belonged to the upper middle class of the time. He wears a leather blouse, under which a white shirt is visible, and a red cloth beret. The portrait is in the collection of the National Gallery in London.',
        image: 'pexels-canva-studio-3194521.jpg'
      },
      {
        title: 'Research',
        description: 'The deepest point in the ocean is the Mariana Trench, located in the Pacific Ocean near the Northern Mariana Islands. Its maximum depth has been estimated to be 10,971 meters (35,994 ft) (plus or minus 11 meters; see the Mariana Trench article for discussion of the various estimates of the maximum depth.) The British naval vessel Challenger II surveyed the trench in 1951 and named the deepest part of the trench the "Challenger Deep". In 1960, the Trieste successfully reached the bottom of the trench, manned by a crew of two men.',
        image: 'pexels-startup-stock-photos-7369.jpg'
      },
      {
        title: 'Define',
        description: 'In his Allegory of the cave, Plato distinguishes between forms and ideas and imagines two distinct worlds: the sensible world and the intelligible world.',
        image: 'pexels-startup-stock-photos-7357.jpg'
      },
      {
        title: 'Development',
        description: 'Research suggests that sports have the capacity to connect youth to positive adult role models and provide positive development opportunities, as well as promote the learning and application of life skills.',
        image: 'pexels-thisisengineering-3861972.jpg'
      },
      {
        title: 'Test',
        description: 'Another health issue that causes death or contributes to other health problems is malnutrition, especially among children. One of the groups malnutrition affects most is young children. Approximately 7.5 million children under the age of 5 die from malnutrition, usually brought on by not having the money to find or make food.',
        image: 'pexels-christina-morillo-1181244.jpg'
      },
      {
        title: 'Go LIVE',
        description: 'Thereafter rose Desire in the beginning, Desire the primal seed and germ of Spirit, Sages who searched with their hearts thought discovered the existents kinship in the non-existent.',
        image: 'pexels-fauxels-3183197.jpg'
      }
    ]
  }),

  methods: {
    setActiveStep (index) {
      this.randomRotate = (Math.random() * 4) + 1
      this.activeStep = index
    }
  },

  mounted () {
    // step.getBoundingClientRect();
    const stepsContainer = document.querySelector('.steps__block--steps');
    const stepsBCR = stepsContainer.getBoundingClientRect();
    const steps = document.querySelectorAll('.steps__block--steps--step')
    steps.forEach((item) => {
      const stepBCR = item.getBoundingClientRect()
      this.stepOffsets.push(stepBCR.left - stepsBCR.left);
    })
    console.log()
  }
}
</script>
<style lang="scss" scoped>
.process {
  position: relative;
  z-index: 2;
  background: $main-bg-color;
  color: $color-primary;

  > * {
    position: relative;
    z-index: 2;
  }

  .steps__description {
    position: relative;

    .card {
      padding: 40px;
      border: none;
      box-shadow: $shadow-medium;
      border-radius: 10px;
      font-size: 1.25em;
      position: relative;
      transition: all .3s $cubic-bezier;

      &__navigation {
        position: absolute;
        top: 5px;
        right: 5px;

        .btn {
          border: none;
          outline: none;
          box-shadow: none;
          font-size: 1.25em;
          color: $color-brand;
          padding: 0;

          &.inactive {
            pointer-events: none;
            color: $color-gray;
          }
        }
      }
    }

    figure {
      width: 120%;
      transition: all .3s $cubic-bezier;
    }

  }

  .steps__block {
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-direction: column;

    &--steps {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      &--step {
        width: 0;
        height: 0;

        &--label {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          width: 0;
          font-weight: bold;
          color: $color-dark;
          text-transform: uppercase;
          font-size: 14px;
          white-space: nowrap;
          position: relative;
          cursor: pointer;

          &:after {
            content: '';
            width: 100%;
            height: 30px;
            background: red;
          }
        }

        &.active {
          .steps__block--steps--step--label {
            color: $color-brand;
          }
        }
      }

    }

    &--progress-bar {
      margin-top: 50px;
      width: 100%;
      background: $color-gray;
      height: 10px;
      border-radius: 10px;
      position: relative;

      &--indicator {
        transition: all .3s $cubic-bezier;
        position: relative;
        top: -5px;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: $color-orange;
        z-index: 2;
      }

      &--progress {
        position: absolute;
        z-index: 1;
        height: 10px;
        width: 0;
        top: 0;
        left: 0;
        transition: all .3s $cubic-bezier;
        border-radius: 10px;
        background: darken($color-orange, 10%);
      }
    }
  }

}
</style>
