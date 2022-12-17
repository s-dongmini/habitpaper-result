import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-397acd59.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-397acd59.js","_app/immutable/chunks/index-b3fac90a.js","_app/immutable/chunks/index-d2ccc832.js"];
export const stylesheets = [];
