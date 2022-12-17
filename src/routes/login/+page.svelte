<script lang="ts">
    import { fly } from "svelte/transition";
    import { loginPOST } from "$lib/_api";
    import type { ActionData } from "./$types";

    export let form: ActionData;

    let id: string = "";
    let password: string = "";
    let error: string = "";
    let errorCount: number = 0;

    function handleSubmit(e: SubmitEvent) {
        if (!id) {
            error = "Please enter the id";
            errorCount++;
        } else if (!password) {
            error = "Please enter the password";
            errorCount++;
        }
    }
</script>

<div
    in:fly={{ y: -30 }}
    class="w-full h-screen flex flex-col justify-center items-center"
>
    <!-- <img class="w-20 h-20" src="/logo.png" alt="logo" />
	<h1 class="text-xl font-bold">MemKING</h1> -->
    <div
        class="bg-white w-96 h-[30rem] flex flex-col items-center shadow-xl shadow-slate-700"
    >
        <div
            class="bg-rose-800 py-5  text-center text-xl w-full text-white font-semibold tracking-widest"
        >
            L o g i n
        </div>
        <form
            class="flex flex-col items-center relative"
            method="post"
            action=""
            on:submit={handleSubmit}
        >
            <input
                class="transition mt-20 p-2 outline-none shadow-lg focus:shadow-violet-200"
                type="text"
                id="id"
                name="id"
                placeholder="ID"
                bind:value={id}
            />
            <input
                class="transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
                bind:value={password}
            />
            {#if error}
                {#key errorCount}
                    <p
                        in:fly={{ y: 20 }}
                        class="text-red-700 text-xs m-2 absolute top-72"
                    >
                        {error}
                    </p>
                {/key}
            {:else if form?.error}
                <p
                    in:fly={{ y: 20 }}
                    class="text-red-700 text-xs m-2 absolute top-72"
                >
                    {form.message}
                </p>
            {/if}
            <input
                class="mt-10 p-3 w-full outline-none rounded-full shadow-lg focus:shadow-violet-200 text-slate-800 font-semibold"
                id="submit"
                type="submit"
                value="Login"
            />
        </form>
        <a class="mt-14 font-semibold text-xs text-slate-800" href="/signup"
            >Sign Up</a
        >
        <p class="font-light text-xs text-slate-800">
            Forgot Password? <a class="font-semibold" href="/">Click Here!</a>
        </p>
    </div>
</div>
