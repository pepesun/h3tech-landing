<template>
  <div id="app">
    <SiteSidebar />
    <div class="site-container">
      <SiteHeader />
      <SiteContent />
    </div>
  </div>
</template>

<script>

import SiteHeader from '~/components/layout/SiteHeader';
import SiteContent from '~/components/layout/SiteContent';
import SiteSidebar from '~/components/layout/SiteSidebar';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteContent,
    SiteSidebar
  }
};
</script>
