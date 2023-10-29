<script lang="ts" src="./card-register.ts"/>

<template>
<div class="min-h-screen bg-gray-100">
  <div class="p-16">
    <img src="https://culqi.com/assets/images/brand/culqi-logo.png" alt="culqi">
  </div>
  
  <div class="flex items-center justify-center bg-gray-100">
    <div v-if="!activeViewCard" class="max-w-md w-full p-6 bg-white rounded-lg shadow-2xl">
      <h2 class="text-2xl font-semibold text-center mb-6">Registrar Tarjeta de Crédito</h2>

      <div class="mb-6 text-center">
        <img :src="creditCardImage" alt="Tarjeta de crédito" class="mx-auto w-40">
      </div>

      <form @submit.prevent="register">
        <div class="mb-6">
          <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
          <input v-model="userForm.email" type="email" id="email" name="email" class="text-light-100 py-3 px-4 rounded w-full border font-normal h-12 text-xs bg-light-200 placeholder:text-light-500 text-plate-400 focus:outline-none focus:border-purple" placeholder="Ingrese el número email">
        </div>
        <div class="mb-6">
          <label for="card_number" class="block text-gray-700 font-medium mb-2">Número de Tarjeta</label>
          <input v-model="userForm.card_number" type="text" id="card_number" name="card_number" class="text-light-100 py-3 px-4 rounded w-full border font-normal h-12 text-xs bg-light-200 placeholder:text-light-500 text-plate-400 focus:outline-none focus:border-purple" placeholder="Ingrese el número de tarjeta">
        </div>
        <div class="mb-6">
          <label for="expiration_month" class="block text-gray-700 font-medium mb-2">Mes</label>
          <input v-model="userForm.expiration_month" type="text" id="expiration_month" name="expiration_month" class="text-light-100 py-3 px-4 rounded w-full border font-normal h-12 text-xs bg-light-200 placeholder:text-light-500 text-plate-400 focus:outline-none focus:border-purple" placeholder="Ingrese el mes">
        </div>
        <div class="mb-6">
          <label for="expiration_year" class="block text-gray-700 font-medium mb-2">Año</label>
          <input v-model="userForm.expiration_year" type="text" id="expiration_year" name="expiration_year" class="text-light-100 py-3 px-4 rounded w-full border font-normal h-12 text-xs bg-light-200 placeholder:text-light-500 text-plate-400 focus:outline-none focus:border-purple" placeholder="Ingrese el año">
        </div>
        <div class="mb-6">
          <label for="cvv" class="block text-gray-700 font-medium mb-2">CVV</label>
          <input v-model="userForm.cvv" type="text" id="cvv" name="cvv" class="text-light-100 py-3 px-4 rounded w-full border font-normal h-12 text-xs bg-light-200 placeholder:text-light-500 text-plate-400 focus:outline-none focus:border-purple" placeholder="Ingrese el cvv">
        </div>
        <button type="submit" class="w-full bg-purple text-white font-semibold py-2 rounded-md">Registrar tarjeta</button>
      </form>
    <LoadingView v-if="isLoading" />
      <div v-if="messageError" class="rounded pt-6 pb-8 mb-4 w-full flex justify-center">
        <p class="text-red-600">{{messageError}}</p>
      </div>
    </div>
    
    <div v-if="activeViewCard" class="m-t-32 bg-white rounded-lg shadow-2xl border border-gray-500  py-4 px-10 flex flex-col items-center">
        <h2>Su token generado es:</h2>
        <p class="mt-8 text-2xl font-bold mt-10 tracking-wide">{{activeViewCard}}</p>
        
        <button class="bg-blue-500 px-12 mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-purple" type="submit">       
          <router-link :to="{ name: 'card' }" class="bg-purple">Ir a ver mi tarjeta</router-link>
        </button>
    </div>
    </div>
  </div>
</template>

