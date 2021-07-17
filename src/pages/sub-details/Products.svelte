<script lang="ts">
    import { productItems } from "../../store";
    import ProductItem from "../../utilities/ProductItem.svelte";
    import FreshJuice from "../../../public/images/FreshJuice.png";
</script>

<div class="products-root w-full px-32 flex flex-col space-y-20 items-center">
    <h1 class=" text-5xl font-bold">
        Fresh <span class="border-b-4 border-yellow pb-2"> Organic </span> Products
    </h1>
    <div class="flex w-full justify-around">
        <div class="relative">
            <img
                src={FreshJuice}
                alt={FreshJuice.split("/")[-1]}
                class="fresh-juice"
            />
            <div
                class="absolute w-full top-10 flex flex-col items-center space-y-10"
            >
                <div
                    class="text-center text-white text-4xl space-y-3 font-bold fresh-juice-head "
                >
                    <h2>Fresh Juice</h2>
                    <h2>100% Organic</h2>
                </div>
                <button class="text-white py-1 px-4 bg-yellow rounded-lg">
                    shop now
                </button>
            </div>
        </div>
        <div class=" grid grid-cols-2 gap-8">
            {#each productItems as productItem}
                <ProductItem {...productItem} />
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    div.fresh-juice-head {
        letter-spacing: 2px;
    }
    img.fresh-juice {
        filter: brightness(75%);
    }
</style>
