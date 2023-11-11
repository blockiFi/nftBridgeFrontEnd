<template>
   <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
    <h1 class="flex justify-center"> Transactions</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    NFT address
                </th>
                <th scope="col" class="px-6 py-3">
                    NFT ID
                </th>
                <th scope="col" class="px-6 py-3">
                    From Chain
                </th>
                <th scope="col" class="px-6 py-3">
                    Destinartion 
                </th>
                <th scope="col" class="px-6 py-3">
                    Status 
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">View On Explorer</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span class="text-blue-600">0x70F657164e5b75689b64B7fd1fA275F334f28e18</span>
                </th>
                <td class="px-6 py-4">
                    32
                </td>
                <td class="px-6 py-4">
                    BSC
                </td>
                <td class="px-6 py-4">
                    OpBNB
                </td>
                <td class="px-6 py-4">
                    
                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">pending</span>

                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View On Explorer</a>
                </td>
            </tr>
          
           
        </tbody>
    </table>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>