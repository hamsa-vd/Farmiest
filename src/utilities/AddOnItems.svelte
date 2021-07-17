<script lang="ts">
    import { addOnItems } from "../store";
    import AddOnItem from "./AddOnItem.svelte";
</script>

<div class="add-on-items-root w-full grid grid-flow-row grid-cols-4 gap-y-16">
    {#each addOnItems as addOnItem}
        <AddOnItem {...addOnItem} />
    {/each}
</div>

<style lang="scss">
</style>
