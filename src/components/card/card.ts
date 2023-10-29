import { defineComponent } from 'vue';

type CardData = {
    card_number: string;
    expiration_year: number;
    expiration_month: number;
    cvv: string;
    email: string;
  };

export default defineComponent({
  name: 'CardView',
  props: {
    responseData: {
        type: Object as () => CardData,
        required: true
    }
  },
  setup() {
    const formatCardNumber = (cardNumber: string) => {
        const formattedNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || '';
        return formattedNumber;
      };

    return {
        formatCardNumber
    }
  }
});