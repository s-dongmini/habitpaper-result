<script lang="ts">
    import { fly, fade } from "svelte/transition";
    import { postPOST } from "$lib/_api";

    export let data;

    const user = data.user;
    let name: string;
    let result = {};
    let key: string;
    let answer: string;
</script>

<div
    in:fly={{ y: -30 }}
    class="select-none w-full h-screen flex flex-col justify-center items-center"
>
    <!-- <img class="w-20 h-20" src="/logo.png" alt="logo" />
	<h1 class="text-xl font-bold">MemKING</h1> -->
    <div
        class="bg-white w-96 h-[32rem] flex flex-col items-center shadow-xl shadow-slate-700"
    >
        <div
            class="bg-rose-800 py-5  text-center text-xl w-full text-white font-semibold tracking-widest"
        >
            Make Test
        </div>
        <input
            class="transition mt-5 mb-5 p-2 outline-none shadow-lg focus:shadow-violet-200"
            type="text"
            id="name"
            name="name"
            placeholder="name"
            bind:value={name}
        />

        <input
            class="transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"
            type="text"
            id="key"
            name="key"
            placeholder="key"
            bind:value={key}
        />
        <input
            class="transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"
            type="text"
            id="answer"
            name="answer"
            placeholder="answer"
            bind:value={answer}
        />

        <button
            class="transition mt-5 p-2 outline-none shadow-lg hover:shadow-violet-200"
            on:click={() => {
                result[key] = [answer, 0];
                key = "";
                answer = "";
                console.log(result);
            }}
        >
            Add
        </button>
        <button
            class="transition mt-2 p-2 outline-none shadow-lg hover:shadow-violet-200"
            on:click={() => {
                postPOST(user, result, name);
                window.location.href = "/";
            }}
        >
            upload
        </button>
        <div
            class="flex flex-col items-center shadow-lg w-5/6 mt-2 h-24 overflow-y-scroll scrollbar-hide"
        >
            {#each Object.keys(result) as i}
                <p>{i}: {result[i][0]}</p>
                <button
                    on:click={() => {
                        delete result[i];
                        result = result;
                    }}>X</button
                >
                <hr class="w-full border-2" />
            {/each}
        </div>
    </div>
</div>
