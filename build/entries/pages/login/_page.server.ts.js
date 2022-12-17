import { l as loginPOST } from "../../../chunks/_api.js";
import { i as invalid, r as redirect } from "../../../chunks/index2.js";
const actions = {
  default: async ({ cookies, request }) => {
    const form = await request.formData();
    const id = form.get("id");
    const password = form.get("password");
    const result = await loginPOST(id, password);
    if (result.status === "failed") {
      return invalid(400, { error: true, message: result.message });
    } else {
      cookies.set("token", id);
      throw redirect(303, "/");
    }
  }
};
export {
  actions
};
