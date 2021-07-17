<script lang="ts">
    import type { StarCountType } from "../store";
    import { starIndices } from "../store";

    import { EyeIcon, HeartIcon } from "svelte-feather-icons";

    export let imgUrl: string;
    export let mealType: string = "Breakfast";
    export let foodItem: string;
    export let discountCost: number;
    export let cost: number = 0;
    export let stars: StarCountType = 0;
</script>

<div class="add-on-item-root p-3 pb-5 space-y-2">
    <div class="grid place-items-center mt-2">
        <img src={imgUrl} alt={imgUrl.split("/")[-1]} />
    </div>
    <div class="mx-2">
        <h3 class="text-xs">{mealType}</h3>
        <h2 class="text-xl font-normal mt-1">{foodItem}</h2>
    </div>
    <div class="flex justify-between items-center mx-2">
        <p class="text-green font-times">
            {#if cost !== 0}
                <span class="line-through font-times mr-2">
                    &#8377; {cost}
                </span>
            {/if}
            &#8377; {discountCost}
        </p>
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
    </div>
    <div class="flex justify-between items-center mx-2">
        <button class="bg-yellow py-2 px-4 rounded shadow-sm uppercase text-xs">
            add to cart &#8594;
        </button>
        <div class="flex space-x-2">
            <span class="text-yellow"> <HeartIcon size="16" /> </span>
            <span class="text-yellow"> <EyeIcon size="16" /> </span>
        </div>
    </div>
</div>

<style lang="scss">
    div.add-on-item-root {
        width: 300px;
        box-shadow: 0px 1px 30px rgba(36, 38, 43, 0.1);
        button {
            color: white;
        }
        p > span {
            color: black;
        }
        margin: auto;
    }
</style>
