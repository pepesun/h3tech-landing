<template>
  <div id="app">
    <SiteHeader />

    <nuxt />

    <SiteFooter />
  </div>

</template>
<script>
import SiteHeader from '@/components/ui/header'
import SiteFooter from '@/components/ui/footer'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>
