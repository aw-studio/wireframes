import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

/**
 * Click outside directive
 */
app.directive('click-outside', {
    mounted(el, binding, vnode) {
      el.clickOutsideEvent = function(event: any) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  });

app.mount('#app')
