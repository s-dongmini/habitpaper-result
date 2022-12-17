<script lang="ts">
    import { timeCalc } from "$lib/_util";
    import { fly } from "svelte/transition";
    import type { PageData } from "./$types";

    export let data: PageData;

    const user = data.user;
    const posts = data.posts;
</script>

<div
    in:fly={{ y: -30 }}
    class="w-full h-screen flex flex-col justify-center items-center"
>
    <div
        class="bg-white w-96 h-[40rem] flex flex-col items-center shadow-xl shadow-slate-700"
    >
        <div
            class="bg-rose-800 py-5  text-center text-xl w-full text-white font-semibold tracking-widest"
        >
            Habit Paper
        </div>
        <div class="mt-10 flex flex-col justify-center items-center">
            <h1 class="text-4xl mb-2">Welcome!</h1>
            {#if user}
                <div>{user}</div>
            {/if}
            {#if user}
                <a
                    class="transition text-center mt-10 p-3 w-full outline-none rounded-full shadow-lg hover:shadow-violet-200 text-slate-800 font-semibold"
                    href="/logout">logout</a
                >
                <a
                    class="transition text-center mt-10 p-3 w-full outline-none rounded-full shadow-lg hover:shadow-violet-200 text-slate-800 font-semibold"
                    href="/test">Make Test!</a
                >
            {:else}
                <a
                    class="transition text-center mt-10 p-3 w-full outline-none rounded-full shadow-lg hover:shadow-violet-200 text-slate-800 font-semibold"
                    href="/login">login</a
                >
                <a
                    class="transition text-center mt-10 p-3 w-full outline-none rounded-full shadow-lg hover:shadow-violet-200 text-slate-800 font-semibold"
                    href="/signup">Sign up</a
                >
            {/if}
        </div>
        <div class="w-5/6 mt-10 h-1/3 overflow-y-scroll scrollbar-hide">
            {#each posts as post}
                <div
                    class="transition w-full mb-5 shadow-lg hover:shadow-2xl bg-slate-50"
                >
                    <a href="/{post.id}">
                        <div class="sm:text-2xl text-xl font-bold p-4">
                            {post.name}
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</div>
