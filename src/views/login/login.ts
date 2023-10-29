import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const user = ref('comercio');
        const password = ref('comercio123');
        const router = useRouter();
  
        const login = () => {
          const pkComercio = "pk_test_ag5v5dr1g455rter";
          localStorage.setItem("c-token", pkComercio);

          router.push('/card-register');
        };
      
        return {
            login,
            user,
            password,
        };
    }
  });