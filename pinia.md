## 1.安装pinia

```js
yarn add pinia
```

## 2.在main.js中挂载pinia

```js
import { createApp } from "vue"
import App from "./App.vue"
// 引入pinia
import { createPinia } from "pinia"

// 创建pinia实例
const pinia = createPinia()

const app = createApp(App)
// 挂载pinia
app.use(pinia)
app.mount("#app")


```

## 3.新建store

```js
import { defineStore } from 'pinia'
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一标识
// 参数2：对象，可以提供state actions getters
const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
   
  },
  actions: {
    
  },
})

export default useCounterStore
```

## 4.state在组件中使用

```vue
<script setup>
import useCounterStore from './store/counter'

const counter = useCounterStore()
</script>

<template>
  <h1>根组件---{{ counter.count }}</h1>
</template>

<style></style>
```

## 5.actions的使用

```js
// 在pinia中没有mutations，只有actions，不管是同步还是异步的代码，都可以在actions中完成。
```

```js
// 在actions中提供方法并且修改数据
import { defineStore } from 'pinia'
// 1. 创建store
// 参数1：store的唯一标识
// 参数2：对象，可以提供state actions getters
const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },
  actions: {
    increment() {
      this.count++
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++
      }, 1000)
    },
  },
})

export default useCounterStore
```

```vue
<!-- 在组件中使用 -->
<script setup>
import useCounterStore from './store/counter'

const counter = useCounterStore()
</script>

<template>
  <h1>根组件---{{ counter.count }}</h1>
  <button @click="counter.increment">加1</button>
  <button @click="counter.incrementAsync">异步加1</button>
</template>
```

## 6.getters的使用

```js
// pinia中的getters和vuex中的基本是一样的，也带有缓存的功能
```

```js
import { defineStore } from 'pinia'
// 1. 创建store
// 参数1：store的唯一标识
// 参数2：对象，可以提供state actions getters
const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    double() {
      return this.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++
      }, 1000)
    },
  },
})

export default useCounterStore
```

```js
<!-- 在组件中使用 -->
  <h1>根组件---{{ counter.count }}</h1>
  <h3>{{ counter.double }}</h3>
```

## 7.storeToRefs的使用

```js
// 如果直接从pinia中解构数据，会丢失响应式， 使用storeToRefs可以保证解构出来的数据也是响应式的
```

```js
<script setup>
import { storeToRefs } from 'pinia'
import useCounterStore from './store/counter'

const counter = useCounterStore()
// 如果直接从pinia中解构数据，会丢失响应式
const { count, double } = counter

// 使用storeToRefs可以保证解构出来的数据也是响应式的
const { count, double } = storeToRefs(counter)
</script>
```

