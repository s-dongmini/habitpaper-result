<script lang="ts">
    import { fly } from "svelte/transition";
    import { signupPOST } from "$lib/_api";

    let id: string = "";
    let first_password: string = "";
    let confirm_password: string = "";
    let error: string = "";
    let errorCount: number = 0;

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        if (!id) {
            error = "Please enter the id";
            errorCount++;
        } else if (!first_password) {
            error = "Please enter the password";
            errorCount++;
        } else if (!confirm_password) {
            error = "Please enter the confirm password";
            errorCount++;
        } else if (first_password !== confirm_password) {
            error = "Passwords do not match";
            errorCount++;
        } else {
            const result = await signupPOST(id, first_password, confirm_password);
            if (result.status === 200) {
                window.location.href = "/";
            } else {
                error = await result.json();
                errorCount++;
                console.log(error);
            }
        }
    }
</script>

<div
    in:fly={{ y: -30 }}
    class="w-full h-screen flex flex-col justify-center items-center"
>
    <div
        class="bg-white w-96 h-[30rem] flex flex-col items-center shadow-xl shadow-slate-700"
    >
        <div
            class="bg-rose-800 py-5  text-center text-xl w-full text-white font-semibold tracking-widest"
        >
            S i g n U p
        </div>
        <form
            class="flex flex-col items-center relative"
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
                id="first_password"
                name="first_password"
                placeholder="PASSWORD"
                bind:value={first_password}
            />
            <input
                class="transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm PASSWORD"
                bind:value={confirm_password}
            />
            {#if error}
                {#key errorCount}
                    <p
                        in:fly={{ y: 20 }}
                        class="text-red-700 text-xs m-2 absolute top-64"
                    >
                        {error}
                    </p>
                {/key}
            {/if}
            <input
                class="mt-10 p-3 w-full outline-none rounded-full shadow-lg focus:shadow-violet-200 text-slate-800 font-semibold"
                id="submit"
                type="submit"
                value="submit"
            />
        </form>
        <p class="m-5 font-light text-xs text-slate-800">
            Already have an account? <a class="font-semibold" href="/login"
                >Login</a
            >
        </p>
    </div>
</div>
