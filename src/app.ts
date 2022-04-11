import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

createInertiaApp({
    resolve: name => require(`./Pages/${name}.vue`).default,
    setup({ el, app, props, plugin }) {
        const vueApp = createApp({
            setup() {},
            render: () => h(app, props),
        });
        
        vueApp.directive('click-outside', {
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

        vueApp.mount(el);
    },
});

InertiaProgress.init();
