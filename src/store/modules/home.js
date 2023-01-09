
import { defineStore } from "pinia"

// 创建store
const useHomeStore = defineStore("home", {
  state() {
    return {
      count: 100
    }
  },

  getters: {
    doubleCount() {
      return this.count * 2
    }
  },
  actions: {
    addCount() {
      this.count++
    },

    slowAddCount() {
      setTimeout(() => {
        this.count += 100
      },2000)
    },

    doubleCountAction() {
      this.doubleCount
    }
  }
})

// 导出store
export default useHomeStore