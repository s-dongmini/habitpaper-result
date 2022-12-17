import { invalid, redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load:PageLoad = ({ cookies }) => {
    cookies.delete("token", {
        path: "/"
    });
    throw redirect(303, "/");
}