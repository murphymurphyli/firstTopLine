<template>
  <div>
    <p>home Component</p>
    <AppAside></AppAside>
    <AppHeader></AppHeader>
  </div>
</template>

<script>
import AppAside from '@/views/home/layout/components/AppAside'
import AppHead from '@/views/home/layout/components/AppHead'

export default {
  name: 'AppHome',
  data () {
    return {}
  }
}
</script>

<style>
</style>
