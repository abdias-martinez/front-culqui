import { mount, VueWrapper } from '@vue/test-utils';
import CardView from '../../src/components/card/card-view.vue';

describe('CardView', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    const responseData = {
      card_number: '1234567890123456',
      expiration_year: 2025,
      expiration_month: 12,
      cvv: '123',
      email: 'test@example.com',
    };

    wrapper = mount(CardView, {
      props: {
        responseData,
      },
    });
  });

  it('renders card details correctly', () => {
    const formattedCardNumber = wrapper.find('h3').text();
    const cardExpiration = wrapper.find('div.flex.gap-10 > div:first-of-type > p').text();
    const cardCvv = wrapper.find('div.flex.gap-10 > div:last-of-type > p').text();
    const cardEmail = wrapper.find('div.flex.items-center > p').text();

    expect(formattedCardNumber).toBe('1234 5678 9012 3456');
    expect(cardExpiration).toBe('12/2025');
    expect(cardCvv).toBe('123');
    expect(cardEmail).toBe('test@example.com');
  });
});