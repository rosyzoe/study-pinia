<template>
  <div>当前计数: {{ count }}</div>
  <div>getters: {{ home.doubleCount }}</div>

  <button @click="increment">点击count+1</button>
  <button @click="slowIncrement">点击count缓慢+100</button>

  <div>{{ user.userInfo }}</div>
  <button @click="changeBtn">点击修改用户信息</button>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
import useHomeStore from './store/modules/home';
  import useUserStore from "./store/modules/user"

  const home = useHomeStore()
  const user = useUserStore()

  // 数据从store解构会失去响应式,需要使用storeToRefs函数保持响应式
  const { count } = storeToRefs(home)

  const increment = () => {
    home.addCount()
  }

  const slowIncrement = () => {
    home.slowAddCount()
  }

  const changeBtn = () => {
    user.changeUserInfoAction()
  }

</script>

<style scoped>

</style>
