// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt'],
	css: ['~/assets/css/main.css'],
	components: [
		{
			path: '~/components', // will get any components nested in let's say /components/test too
			pathPrefix: false,
		},
	],
})
