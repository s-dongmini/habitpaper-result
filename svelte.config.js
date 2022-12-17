//import adapter from '@sveltejs/adapter-node'
import serverless from "@yarbsemaj/adapter-lambda"
import adapter from "@sveltejs/adapter-netlify";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        postcss: true
    }),
    kit: {
        adapter: adapter({
            edge: false,
            split: true
        }),
        csrf: {
            checkOrigin: false
        }
    }
};

export default config;
