<template>
    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 text-center">
      <p><span class="font-bold">Account: </span>{{ getAccount }}</p>
      <p><span class="font-bold">Balance: </span>{{ getBalance }} <span class="font-bold">ETH</span></p>
      <p class="text-red-600 text-xl font-extrabold">{{ getTagline }}</p>
    </div>
</template>

<script>
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('connectWeb3')
      store.dispatch('loadContractData')
    })

    return {
      // access getAccount in computed function
      getAccount: computed(() => store.getters.getAccount),

      // access getBalance in computed function
      getBalance: computed(() => store.getters.getBalance),

      // access getTagline in computed function
      getTagline: computed(() => store.getters.getTagline)
    }
  }
}
</script>
