//import adapter from '@sveltejs/adapter-node'
import serverless from "@yarbsemaj/adapter-lambda"
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        postcss: true
    }),
    kit: {
        adapter: serverless(),
        csrf: {
            checkOrigin: false
        }
    }
};

export default config;
