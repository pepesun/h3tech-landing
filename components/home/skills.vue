<template>
  <section class="container-fluid skills">
    <div class="container skills__container pb-5">
      <div class="row">
        <div class="col-md-12">
          <h3 class="heading--pretext">...what technologies we use</h3>

          <h2 class="section-title">Skills</h2>

          <p class="lead">
            We use the following technologies to fulfill your requirements and create the best solution for you.
            Short copy about skills and about force the user to get in touch with us and call for any web development.
          </p>

          <ul class="skills__list">
            <li v-for="(skill, index) in getSkills" :key="index">
              <div class="skills__card">
                <i v-if="skill.icon" :class="skill.icon" />
                <span>{{skill.name}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        name: 'Git',
        icon: 'devicon-git-plain colored'
      },
      {
        name: 'PHP',
        icon: 'devicon-php-plain colored'
      },
      {
        name: 'Yii2',
        icon: 'devicon-yii-plain colored'
      },
      {
        name: 'Zend',
        icon: 'devicon-zend-plain colored'
      },
      {
        name: 'MySQL',
        icon: 'devicon-mysql-plain colored'
      },
      {
        name: 'PostgreSQL',
        icon: 'devicon-postgresql-plain colored'
      },
      {
        name: 'HTML5',
        icon: 'devicon-html5-plain colored'
      },
      {
        name: 'CSS3',
        icon: 'devicon-css3-plain colored'
      },
      {
        name: 'Bootstrap',
        icon: 'devicon-bootstrap-plain colored'
      },
      {
        name: 'JavaScript',
        icon: 'devicon-javascript-plain colored'
      },
      {
        name: 'jQuery',
        icon: 'devicon-jquery-plain colored'
      },
      {
        name: 'Vue',
        icon: 'devicon-vuejs-plain colored'
      },
      {
        name: 'Node.js',
        icon: 'devicon-nodejs-plain colored'
      },
      {
        name: 'Play Framework (Java)',
        icon: 'devicon-java-plain colored'
      },
      {
        name: 'Oracle APEXX and PL/SQL',
        icon: 'devicon-oracle-original colored'
      },
      {
        name: 'Python3 scikit-learn',
        icon: 'python-plain colored'
      },
      {
        name: 'React Native',
        icon: 'devicon-react-original colored'
      },
      {
        name: 'Android',
        icon: 'devicon-android-plain colored'
      },
      {
        name: 'iOS',
        icon: 'devicon-apple-original'
      },
      {
        name: 'Windows Phone',
        icon: 'devicon-windows8-original colored'
      },
      {
        name: 'Windows 10 Mobile',
        icon: 'devicon-windows8-original colored'
      },
      {
        name: 'SharePoint 2010, 2013',
        icon: ''
      },
      {
        name: '.NET',
        icon: 'devicon-dot-net-plain colored'
      },
      {
        name: 'C#',
        icon: 'devicon-csharp-plain colored'
      },
      {
        name: 'MSSQL',
        icon: ''
      },
      {
        name: 'PowerShell',
        icon: ''
      },
      {
        name: 'Selenium',
        icon: ''
      },
      {
        name: 'JUnit',
        icon: ''
      },
      {
        name: 'JMeter',
        icon: ''
      },
      {
        name: 'Apache',
        icon: 'devicon-apache-plain colored'
      },
      {
        name: 'nginx',
        icon: 'devicon-nginx-original colored'
      },
      {
        name: 'Docker',
        icon: 'devicon-docker-plain colored'
      },
    ]
  }),

  computed: {
    getSkills () {
      return this.skills.sort(() => Math.random() - 0.5);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/devicons.css";

.skills {
  position: relative;
  z-index: 2;
  background: $color-primary;
  color: $main-bg-color;

  > * {
    position: relative;
    z-index: 2;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto;
    padding: 0;

    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
      height: 100px;
      flex: 1 0 10%;
      width: 10%;
      max-width: 10%;

    }
  }

  &__card {
    margin: 5px;
    height: 100%;
    border-radius: 10px;
    background: rgba(0,0,0,0.07);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all .3s $cubic-bezier;
    box-shadow: 0 0 0 $color-brand;
    transform: scale(1);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px $color-brand;
    }

    i {
      width: 100%;
      font-size: 2.5em;
    }

    span {
      padding-top: 5px;
      font-size: .875em;
      line-height: 120%;
    }
  }
}
</style>
