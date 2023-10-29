import { defineComponent, ref } from 'vue'
import { axiosConToken } from '../../helpers/axios'
import CardView from '@/components/card/card-view.vue'
import LoadingView from '@/components/loading/loading-view.vue'

export default defineComponent({
    components: {
        CardView,
        LoadingView
    },
    setup() {
        const inputToken = ref({
            token: '',
        })

        const responseData = ref(null)
        const messageError = ref(null)
        const isLoading = ref(false)

        const submitForm = async () => {
            isLoading.value = true
            const res = await axiosConToken('/card', inputToken?.value?.token)
            const { ok, message, data } = JSON.parse(res.body)
            isLoading.value = false
            if (!ok) {
                responseData.value = null
                messageError.value = message
            } else {
                messageError.value = null
                responseData.value = data
            }
        }

        const creditCardImage = (cardNumber: string) => {
            if (cardNumber.startsWith('4')) {
              return 'https://logowik.com/content/uploads/images/219_visa.jpg';
            } else if (cardNumber.startsWith('5')) {
              return 'https://www.sirchandler.com.ar/wp-content/uploads/2014/06/mastercard.jpg';
            } else {
              return 'https://ruta_para_otra_imagen.com/imagen_predeterminada.jpg';
            }
        };

        return {
          inputToken,
          submitForm,
          responseData,
          creditCardImage,
          messageError,
          isLoading
        }
    }
})