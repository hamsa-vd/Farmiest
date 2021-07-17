<script lang="ts">
    import Offer from "../../utilities/Offer.svelte";
    import { offers } from "../../store";
</script>

<div class="flex justify-between w-full px-32">
    {#each offers as offer}
        <Offer {...offer} />
    {/each}
</div>

<style lang="scss">
</style>
