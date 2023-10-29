
<script lang="ts" src="./get-card.ts"/>

<template>
<div class="bg-gray-100 pt-16 pl-16">
    <img src="https://culqi.com/assets/images/brand/culqi-logo.png" alt="culqi">
  </div>
  <div class="min-h-screen bg-gray-100">
    <div class="flex justify-center items-center flex-col max-w-10xl w-full px-12">
        <h1 class="text-2xl font-bold mt-10 tracking-widest">CARD</h1>
        <div class="bg-gray-100 pt-12 w-full">
            <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8  max-w-5xl">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="tokenInput">
                  Ingrese el Token:
                </label>
                <input v-model="inputToken.token" class="text-light-100 py-3 px-4 rounded w-full border font-normal h-12 text-xs bg-light-200 placeholder:text-light-500 text-plate-400 focus:outline-none focus:border-purple" id="tokenInput" type="text" placeholder="Ingrese su token" required>
              </div>
              <div class="flex items-center justify-center">
                <button class="bg-blue-500 px-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-purple" type="submit">
                  Enviar
                </button>
              </div>
            </form>
        </div>

        <LoadingView v-if="isLoading" />
    
        <div v-if="responseData" class="rounded pt-6 pb-8 mb-4 w-full">
            <CardView :responseData="responseData" />
        </div>

        <div v-if="messageError" class="mt-16 bg-white rounded-lg shadow-2xl border border-gray-500  py-4 px-10 flex flex-col items-center">
            <h2 class="text-2xl font-bold tracking-wide">Lo sentimos :'c</h2>
            <p class=" mt-6 tracking-wide">{{messageError}}</p>

            <button class="bg-blue-500 px-12 mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-orange" type="submit">       
          <router-link :to="{ name: 'cardRegister' }" class="bg-orange">Volver a registrar tarjeta</router-link>
        </button>
        </div>
    
    </div>
  </div>
</template>
