import { r as redirect } from "../../../chunks/index2.js";
const load = ({ cookies }) => {
  cookies.delete("token", {
    path: "/"
  });
  throw redirect(303, "/");
};
export {
  load
};
