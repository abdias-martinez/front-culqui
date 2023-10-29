<script lang="ts" src="./card.ts" />
<template>
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-2xl border border-gray-500">
        <div class="mb-6 px-6 flex justify-between items-center">
            <span class="text-xl">Su tarjeta</span>
            <span>Crédito/Débito</span>
        </div>
        <div class="px-6 mb-2 flex justify-between">
            <img class="w-8" src="https://clipground.com/images/credit-card-chip-clipart-2.png" alt="chip">
            <img class="w-8" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/contactless_payment_icon_136735.png" alt="pago sin contacto">
        </div>
        <h3 class="text-xl font-bold px-6">{{ formatCardNumber(responseData.card_number) }}</h3>
        <div class="flex gap-10 px-6">
            <div>
                <span class="font-normal text-xs bg-light-200 text-gray-700">Válido</span>
                <p class="text-base">{{ responseData.expiration_month }}/{{ responseData.expiration_year }}</p>
            </div>
            <div>
                <span class="font-normal text-xs bg-light-200 text-gray-700">Código de seguridad</span>
                <p class="text-base">{{ responseData.cvv }}</p>
            </div>
        </div>
        <div class="flex items-center px-6">
            <p class="text-base">{{ responseData.email }}</p>
            <img class="w-16 ml-auto" src="https://www.sirchandler.com.ar/wp-content/uploads/2014/06/mastercard.jpg" alt="Card Image">
        </div>
    </div>
</template>