import { loginPOST } from "$lib/_api";
import { invalid, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const form = await request.formData();

        const id = form.get('id') as string;
        const password = form.get('password') as string;

        const result = await loginPOST(id, password);
        if (result.status === "failed") {
            return invalid(400, {error: true, message: result.message})
        } else {
            cookies.set("token", id);
            throw redirect(303, '/');
        }
    }
}