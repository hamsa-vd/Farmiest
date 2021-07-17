<script lang="ts">
    import type { StarCountType } from "../store";
    import { starIndices } from "../store";
    export let imgUrl: string;
    export let item: string;
    export let cost: number;
    export let stars: StarCountType = 0;
</script>

<div class="product-item-root p-2 flex">
    <div class="w-32">
        <img
            src={imgUrl}
            alt={imgUrl.split("/")[-1]}
            class="w-full object-contain"
        />
    </div>
    <div class="flex flex-col justify-evenly items-start pl-8 product">
        <h3 class="text-lg font-bold">{item}</h3>
        <div>
            {#each starIndices as idx}
                <span class="text-yellow">
                    {#if idx > stars}
                        &#10025;
                    {:else}
                        &#10029;
                    {/if}
                </span>
            {/each}
        </div>
        <p class="text-green font-times text-lg">
            &#8377; {cost}
        </p>
    </div>
</div>

<style lang="scss">
    div.product-item-root {
        box-shadow: 0px 1px 30px rgba(36, 38, 43, 0.1);
        border-radius: 5px;
        & > div.product {
            min-width: 250px;
        }
    }
</style>
