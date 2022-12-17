import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let id = "";
  let password = "";
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="${"w-full h-screen flex flex-col justify-center items-center"}">
    <div class="${"bg-white w-96 h-[30rem] flex flex-col items-center shadow-xl shadow-slate-700"}"><div class="${"bg-rose-800 py-5 text-center text-xl w-full text-white font-semibold tracking-widest"}">L o g i n
        </div>
        <form class="${"flex flex-col items-center relative"}" method="${"post"}" action="${""}"><input class="${"transition mt-20 p-2 outline-none shadow-lg focus:shadow-violet-200"}" type="${"text"}" id="${"id"}" name="${"id"}" placeholder="${"ID"}"${add_attribute("value", id, 0)}>
            <input class="${"transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"}" type="${"password"}" id="${"password"}" name="${"password"}" placeholder="${"PASSWORD"}"${add_attribute("value", password, 0)}>
            ${`${(form == null ? void 0 : form.error) ? `<p class="${"text-red-700 text-xs m-2 absolute top-72"}">${escape(form.message)}</p>` : ``}`}
            <input class="${"mt-10 p-3 w-full outline-none rounded-full shadow-lg focus:shadow-violet-200 text-slate-800 font-semibold"}" id="${"submit"}" type="${"submit"}" value="${"Login"}"></form>
        <a class="${"mt-14 font-semibold text-xs text-slate-800"}" href="${"/signup"}">Sign Up</a>
        <p class="${"font-light text-xs text-slate-800"}">Forgot Password? <a class="${"font-semibold"}" href="${"/"}">Click Here!</a></p></div></div>`;
});
export {
  Page as default
};
