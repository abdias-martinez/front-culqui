import { defineComponent, ref } from 'vue'
import { axiosConToken } from '../../helpers/axios'
import LoadingView from '@/components/loading/loading-view.vue'

export default defineComponent({
  computed: {
    creditCardImage(): string {
      if (this.userForm.card_number.startsWith('4')) {
        return 'https://logowik.com/content/uploads/images/219_visa.jpg'
      } else if (this.userForm.card_number.startsWith('5')) {
        return 'https://www.sirchandler.com.ar/wp-content/uploads/2014/06/mastercard.jpg'
      } else {
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKaK-1xADAg7XkRousxQiDqhUpIox_U3sBlXtrkgxiZ7A8VOLdM4uI8gwlThn7QFlnx0'
      }
    }
  },
  components: {
    LoadingView
  },
setup() {
  const userForm = ref({
      email: '',
      card_number: '',
      expiration_month: '',
      expiration_year: '',
      cvv: '',
  })
  const messageError = ref(null)
  const activeViewCard = ref(null)
  const isLoading = ref(false)

  const register = async() => {
      isLoading.value = true
      messageError.value = null
      const res = await axiosConToken('/create-token', userForm.value, 'POST')
      const {ok, message, data} = JSON.parse(res.body)
      isLoading.value = false
      if(!ok) messageError.value = message
      else activeViewCard.value = data
  } 

  return {
    userForm,
    register,    
    messageError,
    activeViewCard,
    isLoading
  }
}

})