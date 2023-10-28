<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 purple">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-6">Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-2">Correo electrónico</label>
          <input v-model="email" type="email" id="email" name="email" class="w-full border-2 border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500" placeholder="correo@example.com">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-medium mb-2">Contraseña</label>
          <input v-model="password" type="password" id="password" name="password" class="w-full border-2 border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500" placeholder="********">
        </div>
        <button type="submit" class="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Lógica de inicio de sesión: Aquí puedes manejar la autenticación del usuario
      console.log('Iniciar sesión con:', this.email, this.password);
      // Por ejemplo, puedes enviar estos datos a tu servidor para autenticar al usuario
    }
  }
};
</script>

<style>
@import 'tailwindcss/tailwind.css';
/* Agrega aquí los estilos de TailwindCSS si no están configurados globalmente */
</style>