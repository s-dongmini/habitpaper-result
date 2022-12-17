import { postGET } from "$lib/_api";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ cookies, params }) => {
    const user = cookies.get("token");
    let posts = {};
    if (user) {
        posts = await postGET(user, params.postid);
    }
    return {
        user: user || null,
        posts: posts
    }
}