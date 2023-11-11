<script setup>
import  Transactions from "../components/Transactions.vue"
import  Modal from "../components/Modal.vue"
import { ref, onMounted, onUpdated, reactive } from 'vue'



const account = ref({});
const fromChain = ref({});
const chainTo = ref({});
async function getAssets(){

}
  // 4. Use modal composable
const supportedChain = reactive([
  {
    chainID : 97,
    chainName: "BNB Chain",
    sybol: "tBNB",
    Explorer: "https://testnet.bscscan.com/"
  },
  {
    chainID : 5611,
    chainName: "OpBNB",
    sybol: "tBNB",
    Explorer: "http://testnet.opbnbscan.com/"
  }
]) 
function updateChainTo(){
  chainTo.value = 0;
}
 async function connectWallet() {

  

 
 }

 function updateWalletState(){

 }
function viewAcount() {
  console.log(account.value);
}

 onMounted(() => {
  updateWalletState();
})

onUpdated(() => {
 })
</script>

<template>
  <main class="flex justify-center ">
    <div
  class="block mt-20 rounded-md w-full md:w-[50%] lg:w-[40%] bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <h5
    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    NFT BRIDGE
  </h5>

    <div class="max-w-md mx-autoc  overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-60" src="/src/assets/images/image.png" alt="Modern building architecture">
    </div>
    <div class="px-4">
        <div class="block">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Chain From
            </label>
         <select v-model="fromChain" @change="updateChainTo()"  id="countries" class="bg-gray-50 border  md:w-[400px] sm:w-[400px]  w-[120px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option   v-for="chain in supportedChain" :key="chain.chainID" :value="chain.chainID">{{chain.chainName}}</option>
  
        </select>
        </div>
         <div class="block mt-3">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              NTF   Address
            </label>
         <select id="countries" class="bg-gray-50 border  md:w-[400px] sm:w-[400px]  w-[120px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="US">Gamers (0x70F657164e5b75689b64B7fd1fA275F334f28e18)</option>
          <option value="US">Fakers (0x70F657164e5b75689b64B7fd1fA275F334f28e18)</option>
          <option value="US">Makers (0x70F657164e5b75689b64B7fd1fA275F334f28e18)</option>
          <option value="US">Busters (0x70F657164e5b75689b64B7fd1fA275F334f28e18)</option>
          
        </select>
        </div>
        <div class="block mt-3">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              NFT to Send
            </label>
         <select id="countries" class="bg-gray-50 border  md:w-[400px] sm:w-[400px]  w-[120px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="US">1</option>
          <option value="CA">2</option>
          <option value="FR">34</option>
          <option value="DE">65</option>
        </select>
        </div>
         <div class="block mt-3">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Destination Chain
            </label>
         <select v-model="chainTo"  id="countries" class="bg-gray-50 border  md:w-[400px] sm:w-[400px]  w-[120px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option   v-for="chain in supportedChain" :key="chain.chainID" :value="chain.chainID" v-show="chain.chainID != fromChain">{{chain.chainName}}</option>
        
        </select>
        </div>
        
        <div class="flex mt-4 w-full justify-center" >
          <button @click="viewAcount()" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><i class="fa fa-spinner fa-spin"></i>Approve</button>
        </div>
        <div class="flex mt-4 w-full justify-center" >
          <button @click="getAssets()" type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="fa fa-spinner fa-spin"></i>Send</button>

        </div>
    </div>
    
    
  </div>
</div>
 
</div>
  </main>

  <Transactions></Transactions>
  <Modal ></Modal>
 
  </template>
