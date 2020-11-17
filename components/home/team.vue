<template>
  <section class="container-fluid members">
    <div class="container members__container pb-5">
      <div class="row">
        <div class="col-md-12">
          <h3 class="heading--pretext text-center">...meet the people who make your ideas alive</h3>

          <h2 class="section-title text-center">Our team</h2>

          <p class="lead text-center w-75 mx-auto">
            Lead text for team. Thereafter rose Desire in the beginning, Desire the primal seed and germ of Spirit,
            Sages who searched with their heart's thought discovered the existent's kinship in the non-existent.
          </p>

          <div class="row text-center justify-content-center my-5">
            <div
              class="col-md-3"
              v-for="(member, index) in members" :key="'member_' + index"
              >
              <div class="card">
                <div class="card__image">
                  <img :src="member.image" :alt="member.name" />
                </div>
                <div class="card__content">
                  <h3>{{member.name}}</h3>
                  <h4>{{member.role}}</h4>
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
    members: [
      {
        name: 'Peter Hudoba',
        role: 'CEO, developer',
        image: 'https://i.pravatar.cc/400?img=3',
      },
      {
        name: 'Steven Hawking',
        role: 'lead developer',
        image: 'https://i.pravatar.cc/400?img=4',
      },
      {
        name: 'Johnny Rotten',
        role: 'UI designer',
        image: 'https://i.pravatar.cc/400?img=5',
      },
      {
        name: 'Pamela Anderson',
        role: 'UX expert',
        image: 'https://i.pravatar.cc/400?img=6',
      },
      {
        name: 'Bill Gates',
        role: 'front-end developer',
        image: 'https://i.pravatar.cc/400?img=7',
      },
      {
        name: 'Barbara Palvin',
        role: 'head of hapiness',
        image: 'https://i.pravatar.cc/400?img=8',
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
.members {
  position: relative;
  z-index: 2;
  background: $color-light;
  color: $color-primary;

  > * {
    position: relative;
    z-index: 2;
  }

  .card {
    box-shadow: none;
    border: none;
    margin-bottom: 40px;

    &__image {
      border-radius: 10px;
      box-shadow: $shadow-medium;
      overflow: hidden;
      margin-bottom: 10px;
      filter: grayscale(100%) brightness(135%);
      transition: all .3s $cubic-bezier;
        z-index: 9;
    }

    &__content {
      position: relative;
      transition: all .3s $cubic-bezier;
      background: transparent;
      z-index: 10;
      border-radius: 10px;
      padding: 10px;
    }

    &:hover {
      .card__image {
        filter: grayscale(0%) brightness(100%);
        transform: scale(1.05);
      }

      .card__content {
        transform: translateY(-20px);
        background: $color-light;
        box-shadow: $shadow-medium;
      }

      h3 {
        &:before {
          width: 100px;
          margin-left: -50px;
          height: 4px;
          background: $color-orange;
        }
      }
    }

    h3 {
      position: relative;
      margin-bottom: 8px;
      padding-bottom: 8px;

      &:before {
        content: '';
        width: 50px;
        height: 2px;
        background: $color-brand;
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -25px;
        transition: all .3s $cubic-bezier;

      }
    }

    h4 {
      font-family: $base-font-family;
      font-size: 1em;
    }
  }
}
</style>
