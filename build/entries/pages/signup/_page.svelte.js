import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id = "";
  let first_password = "";
  let confirm_password = "";
  return `<div class="${"w-full h-screen flex flex-col justify-center items-center"}"><div class="${"bg-white w-96 h-[30rem] flex flex-col items-center shadow-xl shadow-slate-700"}"><div class="${"bg-rose-800 py-5 text-center text-xl w-full text-white font-semibold tracking-widest"}">S i g n U p
        </div>
        <form class="${"flex flex-col items-center relative"}" action="${""}"><input class="${"transition mt-20 p-2 outline-none shadow-lg focus:shadow-violet-200"}" type="${"text"}" id="${"id"}" name="${"id"}" placeholder="${"ID"}"${add_attribute("value", id, 0)}>
            <input class="${"transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"}" type="${"password"}" id="${"first_password"}" name="${"first_password"}" placeholder="${"PASSWORD"}"${add_attribute("value", first_password, 0)}>
            <input class="${"transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"}" type="${"password"}" id="${"confirm-password"}" name="${"confirm-password"}" placeholder="${"Confirm PASSWORD"}"${add_attribute("value", confirm_password, 0)}>
            ${``}
            <input class="${"mt-10 p-3 w-full outline-none rounded-full shadow-lg focus:shadow-violet-200 text-slate-800 font-semibold"}" id="${"submit"}" type="${"submit"}" value="${"submit"}"></form>
        <p class="${"m-5 font-light text-xs text-slate-800"}">Already have an account? <a class="${"font-semibold"}" href="${"/login"}">Login</a></p></div></div>`;
});
export {
  Page as default
};
