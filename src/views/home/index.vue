<template>
  <div>
    <p>home Component</p>
    <AppAside></AppAside>
    <AppHeader></AppHeader>
  </div>
</template>

<script>
import AppAside from '@/views/layout/components/AppAside'
import AppHead from '@/views/layout/components/AppHead'

export default {
  name: 'AppHome',
  data () {
    return {}
  }
}
</script>

<style>
</style>
