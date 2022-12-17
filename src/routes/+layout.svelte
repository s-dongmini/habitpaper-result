<script lang="ts">
    import "../app.css";
    import Progress from "$lib/Progress.svelte";
    import { words } from "$lib/words";

    let locx: string = "0px";
    let locy: string = "0px";
    let font: string = "20px";
    function cal(x: number, y: number, z: number, fs: number) {
        let scr_w: number;
        let scr_h: number;
        if (typeof window === "undefined") {
            scr_w = 1920;
            scr_h = 1080;
        } else {
            scr_w = window.innerWidth;
            scr_h = window.innerHeight;
        }
        const l = scr_w / (2 * z * Math.tan(1.5));
        const loc_x = -(x / z) * l;
        const loc_y = -(y / z) * l;
        const font_size = (fs * l) / z;
        return {
            x: loc_x + scr_w / 2,
            y: loc_y + scr_h / 2,
            font_size: font_size,
        };
    }
    function generate() {
        const x = Math.floor(Math.random() * 10000 - 5000);
        const y = Math.floor(Math.random() * 10000 - 5000);
        const start = cal(x, y, 25, 100);
        const end = cal(x, y, 3, 100);
        if (typeof document !== "undefined") {
            const elem = document.createElement("p");
            const text = document.createTextNode(
                words[Math.floor(Math.random() * words.length)]
            );
            elem.appendChild(text);
            elem.style.transition = "all 10s ease-in";
            elem.style.color = "#fff";
            elem.style.position = "fixed";
            elem.style.userSelect = "none";
            elem.style.top = start.y.toFixed(2) + "px";
            elem.style.left = start.x.toFixed(2) + "px";
            elem.style.fontSize = start.font_size.toFixed(2) + "px";
            elem.style.zIndex = "-1";
            document.body.appendChild(elem);
            setTimeout(() => {
                elem.style.top = end.y.toFixed(2) + "px";
                elem.style.left = end.x.toFixed(2) + "px";
                elem.style.fontSize = end.font_size.toFixed(2) + "px";
            }, 10);
            setTimeout(() => {
                elem.remove();
            }, 3000);
        }
    }
    setInterval(generate, 5);
</script>

<Progress />

<slot />
