import { createStore } from 'vuex'
import Web3 from 'web3'
import router from './../router'
import DisplayTagline from './../contracts/DisplayTagline.json'

export default createStore({
  state: {
      receipt: null,
      account: null,
      balance: null,
      tagline: null
  },
  mutations: {
      setReceipt (state, payload) {
          state.receipt = payload
      },
      setAccount (state, payload) {
          state.account = payload
      },
      setBalance (state, payload) {
          state.balance = payload
      },
      setTagline (state, payload) {
          state.tagline = payload
      }
  },
  actions: {
      async connectWeb3 ({commit}) {
          if (window.ethereum != null) {
              const web3 = new Web3(window.ethereum)
              try {
                  // Request account access if needed
                  await window.ethereum.enable()
                  
                  // Acccounts now exposed
                  // Fetch the accounts and commit the first account to state
                  let accounts = await web3.eth.getAccounts()
                  commit('setAccount', accounts[0])
                  
                  //  Fetch Balance of account and converted to ETH
                  let balance = await web3.eth.getBalance(accounts[0])
                  let balanceInETH = web3.utils.fromWei(balance, 'ether')
                  commit('setBalance', balanceInETH)

                } catch (error) {
                    // User denied account access...
                    alert('User denied account access')
                }
            }
        },
        async loadContractData ({commit}) {
            const web3 = new Web3(window.ethereum)
            const networkID = await web3.eth.net.getId()
            const networkData = DisplayTagline.networks[networkID]
            if(networkData) {
                
                const instance = new web3.eth.Contract(DisplayTagline.abi, networkData.address)
                const tagline = await instance.methods.tagline().call()
                commit('setTagline', tagline)
            } else {
               console.log('Contract not deployed')
           }
      },
       async updateTagline ({commit}, payload) {
        const web3 = new Web3(window.ethereum)
        const networkID = await web3.eth.net.getId()
        const networkData = DisplayTagline.networks[networkID]

        if(networkData) {
            
            const newInstance = new web3.eth.Contract(DisplayTagline.abi, networkData.address)
            newInstance.methods.update(payload.taglineData).send({ from: this.state.account })
        .once('receipt', (receipt) => {
            commit('setReceipt', receipt)
            router.push('/')
          })
        } else {
           console.log('Contract not deployed')
       }
      }
  },
  getters: {
      getReceipt (state) {
          return state.receipt
      },
      getAccount (state) {
          return state.account
      },
      getBalance (state) {
          return state.balance
      },
      getTagline (state) {
          return state.tagline
      }
  }
});