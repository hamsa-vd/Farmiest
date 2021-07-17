<script lang="ts">
    import AddOnItems from "../../utilities/AddOnItems.svelte";

    const foodTypes = ["Breakfast", "Fruits", "Salads"];
</script>

<div class="add-ons-root space-y-20 w-full px-32">
    <h1 class="w-full text-center text-5xl font-bold">
        New <span class="pb-2"> Organic </span> Add-ons
    </h1>
    <ul class="flex space-x-10 justify-center items-center">
        {#each foodTypes as foodType, idx}
            <li class:active={idx === 0} class="text-base">{foodType}</li>
        {/each}
    </ul>
    <AddOnItems />
</div>

<style lang="scss">
    @import "../../utilities/_variables.scss";

    h1 {
        & > span {
            border-bottom: 2px solid $yellow;
        }
    }
    ul {
        & > li {
            &.active {
                background-color: $green;
                color: white;
                box-shadow: -1.15px 10.94px 39.56px rgba(0, 0, 0, 0.15);
                border-radius: 5px;
                padding: 0.5em 2.5em;
            }
        }
    }
</style>
