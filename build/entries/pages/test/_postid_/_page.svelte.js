import { c as create_ssr_component, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.posts.item;
  const keys = Object.keys(post);
  let tempKey = keys[Math.floor(Math.random() * keys.length)];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"select-none w-full h-screen flex flex-col justify-center items-center"}">
    <div class="${"bg-white w-96 h-[30rem] flex flex-col items-center shadow-xl shadow-slate-700"}"><div class="${"bg-rose-800 py-5 text-center text-xl w-full text-white font-semibold tracking-widest"}">T E S T
        </div>
        <div class="${"flex flex-col justify-center items-center h-full"}"><div>${escape(tempKey)}</div>
            ${``}</div>
        <div class="${"w-2/3 flex justify-between mb-10 font-extralight text-xs"}"><div>${escape("")}</div>
                <div>${escape("")}</div></div>
        <a href="${"/"}" class="${"text-xs"}">Back to Home</a></div></div>`;
});
export {
  Page as default
};
