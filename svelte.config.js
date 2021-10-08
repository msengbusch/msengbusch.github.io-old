import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		target: '#svelte',

        adapter: static_adapter(),

        paths: {
            //base: '/msengbusch.github.io'
        }
	}
};

export default config;
