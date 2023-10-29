import { mount } from '@vue/test-utils';
import LoginVue from '../../src/views/login/login-view.vue';
import { createRouter, createMemoryHistory } from 'vue-router';

describe('Login Viewt', () => {
    it('correctly logs in', async () => {
      const router = createRouter({
        history: createMemoryHistory(),
        routes: [
          {
            path: '/',
            name: 'Login',
            component: LoginVue,
          },
          {
            path: '/card-register',
            name: 'CardRegister',
            component: {
              template: '<div>Card Register Component</div>',
            },
          },
        ],
      });
  
      const wrapper = mount(LoginVue, {
        global: {
          plugins: [router],
        },
      });
  
      const usernameInput = wrapper.find('#user');
      const passwordInput = wrapper.find('#password');
      await usernameInput.setValue('comercio');
      await passwordInput.setValue('comercio123');
  
      await wrapper.find('form').trigger('submit');
      await router.isReady();
  
      expect(router.currentRoute.value.path).toBe('/card-register');
    });
  });