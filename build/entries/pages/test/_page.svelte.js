import { c as create_ssr_component, f as add_attribute, d as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.user;
  let name;
  let result = {};
  let key;
  let answer;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"select-none w-full h-screen flex flex-col justify-center items-center"}">
    <div class="${"bg-white w-96 h-[32rem] flex flex-col items-center shadow-xl shadow-slate-700"}"><div class="${"bg-rose-800 py-5 text-center text-xl w-full text-white font-semibold tracking-widest"}">Make Test
        </div>
        <input class="${"transition mt-5 mb-5 p-2 outline-none shadow-lg focus:shadow-violet-200"}" type="${"text"}" id="${"name"}" name="${"name"}" placeholder="${"name"}"${add_attribute("value", name, 0)}>

        <input class="${"transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"}" type="${"text"}" id="${"key"}" name="${"key"}" placeholder="${"key"}"${add_attribute("value", key, 0)}>
        <input class="${"transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"}" type="${"text"}" id="${"answer"}" name="${"answer"}" placeholder="${"answer"}"${add_attribute("value", answer, 0)}>

        <button class="${"transition mt-5 p-2 outline-none shadow-lg hover:shadow-violet-200"}">Add
        </button>
        <button class="${"transition mt-2 p-2 outline-none shadow-lg hover:shadow-violet-200"}">upload
        </button>
        <div class="${"flex flex-col items-center shadow-lg w-5/6 mt-2 h-24 overflow-y-scroll scrollbar-hide"}">${each(Object.keys(result), (i) => {
    return `<p>${escape(i)}: ${escape(result[i][0])}</p>
                <button>X</button>
                <hr class="${"w-full border-2"}">`;
  })}</div></div></div>`;
});
export {
  Page as default
};
