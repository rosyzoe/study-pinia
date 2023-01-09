import { defineStore } from "pinia";

// 访问其他store
import useHomeStore from "./home";


const useUserStore = defineStore("user", {
  state() {
    return {
      userInfo: {
        username: "zxx",
        age: 18
      }
    }
  },

  getters: {},
  actions: {

    changeUserInfoAction() {

      // 访问其他store
      const home = useHomeStore()
      home.addCount()

      this.userInfo.username = "xin",
      this.userInfo.age = 20
    }
  }
})

export default useUserStore