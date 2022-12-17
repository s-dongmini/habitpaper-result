import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index.js";
function background(n) {
  switch (n) {
    case 0:
      return "rgb(256,256,256)";
    case 1:
      return "rgb(254,242,242)";
    case 2:
      return "rgb(254,226,226)";
    case 3:
      return "rgb(254,202,202)";
    default:
      return "rgb(252,165,165)";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.posts.item;
  const postid = data.postid;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"select-none w-full h-screen flex flex-col justify-center items-center"}">
    <div class="${"bg-white w-96 h-[30rem] flex flex-col items-center shadow-xl shadow-slate-700"}"><div class="${"bg-rose-800 py-5 text-center text-xl w-full text-white font-semibold tracking-widest"}">Habit Paper
        </div>
        <div class="${"flex flex-col items-center shadow-lg w-5/6 mt-2 h-2/3 overflow-y-scroll scrollbar-hide"}">${each(Object.keys(post), (i) => {
    return `<p class="${"w-full text-center"}" style="${"background:" + escape(background(post[i][1]), true) + ";"}">${escape(i)}: ${escape(post[i][0])}</p>
                <hr class="${"w-full border-2"}">`;
  })}</div>
        <a href="${"/test/" + escape(postid, true)}" class="${"shadow-lg rounded-full p-2 m-1"}">TEST</a>
        <a href="${"/"}" class="${"text-xs"}">Back to Home</a></div></div>`;
});
export {
  Page as default
};
