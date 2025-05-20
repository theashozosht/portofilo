const dev = process.env.NODE_ENV !== 'production'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    // target: 'server',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Yasin Satvati',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: "Hello! My name is Yasin and I enjoy creating things that live on the internet.My interest in web development started back in..."
            },
            { name: 'format-detection', content: 'telephone=no' },
            {
                name: "keywords",
                content: [
                    "یاسین",
                    "سطوتی",
                    "یاسین سطوتی",
                    "yasin",
                    "satvati",
                    "setvati",
                    "yasin satvati",
                    "yasin setvati",
                    "the ashozosht",
                    "web developer",
                    "front-end",
                ]
            },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/apple-touch-icon.png' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['nuxt-gsap-module', '@nuxtjs/color-mode'],
    // Add global page transition
    pageTransition: {
        name: 'page',
        mode: 'out-in',
        css: false,

        beforeEnter(el) {
            this.$gsap.set(el, {
                opacity: 0
            })
        },

        enter(el, done) {
            this.$gsap.to(el, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: done
            })
        },

        leave(el, done) {
            this.$gsap.to(el, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: done
            })
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // baseURL: dev ? 'localhost' : 'server',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'fa',
            background_color: "#fff"
        },
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    router: {
        parseQuery(query) {
            const qs = require('qs');
            return qs.parse(query);
        },
        stringifyQuery(query) {
            const qs = require('qs');
            var result = qs.stringify(query);

            return result ? ('?' + result) : '';
        },
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        }
    },

    manifest: {
        short_name: "short_name",
        name: "name",
        start_url: "/",
        display: "standalone",
        orientation: "portrait",
        theme_color: "#fff",
        background_color: "#fff",
        lang: "fa",
        share_target: {
            action: "/",
            method: "GET",
            enctype: "application/x-www-form-urlencoded",
            params: {
                title: "title",
                text: "text",
                url: "url",
            },
        },
    }
}