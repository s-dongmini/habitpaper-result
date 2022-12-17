import { c as create_ssr_component, e as escape, d as each } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const user = data.user;
  const posts = data.posts;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-full h-screen flex flex-col justify-center items-center"}"><div class="${"bg-white w-96 h-[40rem] flex flex-col items-center shadow-xl shadow-slate-700"}"><div class="${"bg-rose-800 py-5 text-center text-xl w-full text-white font-semibold tracking-widest"}">Habit Paper
        </div>
        <div class="${"mt-10 flex flex-col justify-center items-center"}"><h1 class="${"text-4xl mb-2"}">Welcome!</h1>
            ${user ? `<div>${escape(user)}</div>` : ``}
            ${user ? `<a class="${"transition text-center mt-10 p-3 w-full outline-none rounded-full shadow-lg hover:shadow-violet-200 text-slate-800 font-semibold"}" href="${"/logout"}">logout</a>
                <a class="${"transition text-center mt-10 p-3 w-full outline-none rounded-full shadow-lg hover:shadow-violet-200 text-slate-800 font-semibold"}" href="${"/test"}">Make Test!</a>` : `<a class="${"transition text-center mt-10 p-3 w-full outline-none rounded-full shadow-lg hover:shadow-violet-200 text-slate-800 font-semibold"}" href="${"/login"}">login</a>
                <a class="${"transition text-center mt-10 p-3 w-full outline-none rounded-full shadow-lg hover:shadow-violet-200 text-slate-800 font-semibold"}" href="${"/signup"}">Sign up</a>`}</div>
        <div class="${"w-5/6 mt-10 h-1/3 overflow-y-scroll scrollbar-hide"}">${each(posts, (post) => {
    return `<div class="${"transition w-full mb-5 shadow-lg hover:shadow-2xl bg-slate-50"}"><a href="${"/" + escape(post.id, true)}"><div class="${"sm:text-2xl text-xl font-bold p-4"}">${escape(post.name)}
                        </div></a>
                </div>`;
  })}</div></div></div>`;
});
export {
  Page as default
};
