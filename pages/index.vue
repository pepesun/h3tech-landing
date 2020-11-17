<template>
  <main id="home">
    <Hero />

    <Shape classes="shape-bottom shape-fluid-x svg-shim text-dirty-white" />
    <AboutUs id="about" />

    <Services id="services"/>

    <Shape2 classes="shape-bottom shape-flip-x shape-fluid-x svg-shim text-dirty-white" />
    <Process id="process"/>

    <Referencies id="projects"/>

    <Cta />

    <Shape2 classes="shape-bottom shape-fluid-x svg-shim text-primary" />
    <Skills id="skills"/>

    <Shape2 classes="shape-bottom shape-flip-x shape-fluid-x svg-shim text-white" />
    <Team id="team"/>

    <Contact id="contact"/>

  </main>
</template>

<script>
import Hero from '@/components/home/hero'
import Shape from '@/components/ui/shape'
import Shape2 from '@/components/ui/shape_2'
import AboutUs from '@/components/home/about-us'
import Services from '@/components/home/services'
import Skills from '@/components/home/skills'
import Cta from '@/components/home/cta'
import Process from '@/components/home/process'
import Referencies from '@/components/home/referencies'
import Team from '@/components/home/team'
import Contact from '@/components/home/contact'

export default {
  name: 'HomePage',

  components: {
    Hero,
    Shape,
    Shape2,
    AboutUs,
    Services,
    Skills,
    Cta,
    Process,
    Referencies,
    Team,
    Contact
  }
};
</script>

<style lang="scss">
body {
  @extend .pattern-background;
}
</style>
