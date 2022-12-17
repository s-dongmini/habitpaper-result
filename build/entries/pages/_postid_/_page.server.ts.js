import { a as postGET } from "../../../chunks/_api.js";
const load = async ({ cookies, params }) => {
  const user = cookies.get("token");
  let posts = {};
  if (user) {
    posts = await postGET(user, params.postid);
  }
  return {
    user: user || null,
    posts,
    postid: params.postid
  };
};
export {
  load
};
