import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ cookies }) => {
    const user = cookies.get("token");
    return {
        user: user || null,
    }
}