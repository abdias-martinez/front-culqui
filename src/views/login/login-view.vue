<script lang="ts" src="./login.ts"/>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 purple">
    <div class="max-w-3xl w-full bg-white rounded-lg drop-shadow-2xl flex mx-5">
      <div class="flex-auto w-32 flex flex-col pt-12 p-6 bg-green relative">
        <h2 class="pt-6 pb-6 text-4xl font-semibold">Culqi</h2>
        <p>Acepta pagos con tarjetas y gestiona tu negocio.</p>
        <img style="object-fit: contain;" src="https://culqi.com/assets/images/brand/brand.svg" class="absolute  pb-1 -right-5 bg-white p-2 rounded-full" alt="Culqi logo">
      </div>
      <div class="flex-auto w-64 p-6">      
        <h2 class="text-2xl font-semibold text-center mb-6">Iniciar sesión</h2>
        <form @submit.prevent="login">
        <div class="mb-4">
          <label for="user" class="block text-gray-700 font-medium mb-2">Comercio</label>
          <input v-model="user" type="text" id="user" name="user" class="w-full border-2 border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500" placeholder="comercio">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-medium mb-2">Contraseña</label>
          <input v-model="password" type="password" id="password" name="password" class="w-full border-2 border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500" placeholder="********">
        </div>
        <button type="submit" class="w-full bg-orange text-white font-semibold py-2 rounded-md">Iniciar sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>