import { p as postSCAN } from "../../chunks/_api.js";
const load = async ({ cookies }) => {
  const user = cookies.get("token");
  let posts = [];
  if (user) {
    posts = await postSCAN(user);
  }
  console.log(posts);
  return {
    user: user || null,
    posts
  };
};
export {
  load
};
