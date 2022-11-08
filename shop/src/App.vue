<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body,html{
    padding: 0;
    margin: 0;
}
/* flex布局类名 ：父级加这个，子集分布在左右侧*/
.flex-float{
 display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex{
    display: flex;
    align-items: center;
}
</style>
