<script>
    import { fly, fade } from "svelte/transition";
    export let data;

    const post = data.posts.item;

    const keys = Object.keys(post);

    let tempKey = keys[Math.floor(Math.random() * keys.length)];
    let flag = 0;

    function helper() {
        if (flag === 0) {
            flag = 1;
        } else {
            flag = 0;
            tempKey = keys[Math.floor(Math.random() * keys.length)];
        }
    }
</script>

<div
    in:fly={{ y: -30 }}
    class="select-none w-full h-screen flex flex-col justify-center items-center"
>
    <!-- <img class="w-20 h-20" src="/logo.png" alt="logo" />
	<h1 class="text-xl font-bold">MemKING</h1> -->
    <div
        class="bg-white w-96 h-[30rem] flex flex-col items-center shadow-xl shadow-slate-700"
        on:click={helper}
    >
        <div
            class="bg-rose-800 py-5  text-center text-xl w-full text-white font-semibold tracking-widest"
        >
            T E S T
        </div>
        <div class="flex flex-col justify-center items-center h-full">
            <div>{tempKey}</div>
            {#if flag === 1}
                <div in:fade>{post[tempKey][0]}</div>
            {/if}
        </div>
        {#key flag}
            <div
                in:fade
                class="w-2/3 flex justify-between mb-10 font-extralight text-xs"
            >
                <div
                    on:click={() => {
                        if (post[tempKey][1] < 5) {
                            post[tempKey][1]++;
                            console.log("+");
                        }
                    }}
                >
                    {flag === 1 ? "Incorrect" : ""}
                </div>
                <div
                    on:click={() => {
                        if (post[tempKey][1] > 0) {
                            post[tempKey][1]--;
                            console.log("-");
                        }
                    }}
                >
                    {flag === 1 ? "Correct" : ""}
                </div>
            </div>
        {/key}
        <a href="/" class="text-xs" on:click={() => {}}>Back to Home</a>
    </div>
</div>
