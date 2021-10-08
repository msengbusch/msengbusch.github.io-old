import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	paths: {
        base: '/msengbusch.github.io',
        assets: '/msengbusch.github.io'
    },

	kit: {
		target: '#svelte',

        adapter: static_adapter()
	}
};

export default config;
