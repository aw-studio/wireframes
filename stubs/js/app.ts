import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import '../css/app.css';

createInertiaApp({
    resolve: async name => {
        const page: any = await resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        );
        page.default.layout = page.default.layout;
        return page;
    },
    setup({ el, app, props, plugin }) {
        const vueApp = createApp({
            setup() {},
            render: () => h(app, props),
        });

        vueApp.directive('click-outside', {
            mounted(el, binding, vnode) {
                el.clickOutsideEvent = function (event: any) {
                    if (!(el === event.target || el.contains(event.target))) {
                        binding.value(event, el);
                    }
                };
                document.body.addEventListener('click', el.clickOutsideEvent);
            },
            unmounted(el) {
                document.body.removeEventListener(
                    'click',
                    el.clickOutsideEvent
                );
            },
        });

        vueApp.mount(el);
    },
});

// import { createApp, h } from 'vue';
// import { createInertiaApp } from '@inertiajs/inertia-vue3';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import App from './layout/App.vue';
// createInertiaApp({
//     resolve: async name => {
//         const page: any = await resolvePageComponent(
//             `./Pages/${name}.vue`,
//             import.meta.glob('./Pages/**/*.vue')
//         );
//         page.default.layout = page.default.layout || App;
//         return page;
//     },
//     setup({ el, app, props, plugin }) {
//         const iApp = createApp({ render: () => h(app, props) }).use(plugin);
//         iApp.mount(el);
//     },
// });
InertiaProgress.init();
