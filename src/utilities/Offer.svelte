<script lang="ts">
    export let imgUrl: string;
    export let offer: string;
    export let item: string;
</script>

<div class="px-8 flex flex-col justify-center items-start offer-root relative">
    <img
        src={imgUrl}
        alt={imgUrl.split("/")[-1]}
        class="absolute inset-0 z-0"
    />
    <div class="z-10">
        <h3 class="font-satisfy text-green">{offer}</h3>
        <h1 class="text-xl">{item}</h1>
    </div>
    <div class="z-10">
        <button class="bg-yellow px-3 py-1 rounded-lg mt-6 shadow-lg">
            Shop Now
        </button>
    </div>
</div>

<style lang="scss">
    div.offer-root {
        min-height: 250px;
        // width: 100%;
        min-width: 400px;
        button {
            color: white;
        }
    }
</style>
