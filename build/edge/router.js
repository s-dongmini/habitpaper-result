// build/edge/static.js
var static_default = ["/_app/immutable/assets/_layout-66baabae.css", "/_app/immutable/chunks/0-e6d88474.js", "/_app/immutable/chunks/1-bc212610.js", "/_app/immutable/chunks/2-053206cf.js", "/_app/immutable/chunks/3-d76b4e2a.js", "/_app/immutable/chunks/4-909bab74.js", "/_app/immutable/chunks/5-b42100a6.js", "/_app/immutable/chunks/6-643c9054.js", "/_app/immutable/chunks/7-c2da12e4.js", "/_app/immutable/chunks/8-bb148104.js", "/_app/immutable/chunks/9-ee87d8fd.js", "/_app/immutable/chunks/_api-074df49a.js", "/_app/immutable/chunks/index-b3fac90a.js", "/_app/immutable/chunks/index-d2ccc832.js", "/_app/immutable/chunks/singletons-bae5ec2c.js", "/_app/immutable/chunks/stores-e6cc688c.js", "/_app/immutable/components/error.svelte-c8ad5026.js", "/_app/immutable/components/pages/_layout.svelte-71123ae0.js", "/_app/immutable/components/pages/_page.svelte-397acd59.js", "/_app/immutable/components/pages/_postid_/_page.svelte-12b5feea.js", "/_app/immutable/components/pages/login/_page.svelte-04fd2241.js", "/_app/immutable/components/pages/signup/_page.svelte-03d54b76.js", "/_app/immutable/components/pages/test/_page.svelte-97ab38e3.js", "/_app/immutable/components/pages/test/_postid_/_page.svelte-3fd4741f.js", "/_app/immutable/components/pages/upload/_page.svelte-6eccad83.js", "/_app/immutable/start-ca74e2a3.js", "/_app/version.json", "/favicon.png", "/vite-manifest.json"];

// build/edge/_router.js
"use strict";
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  if (request.method !== "GET") {
    callback(null, request);
    return;
  }
  let uri = request.uri;
  if (!uri.includes(".") && uri.slice(-1) !== "/") {
    uri += "/";
  }
  if (uri.slice(-1) === "/") {
    uri += "index.html";
  }
  if (static_default.includes(uri)) {
    request.uri = uri;
    const domainName = request.origin.custom.customHeaders["s3-host"][0].value;
    request.origin.custom.domainName = domainName;
    request.origin.custom.path = "";
    request.headers["host"] = [{key: "host", value: domainName}];
  }
  callback(null, request);
};
