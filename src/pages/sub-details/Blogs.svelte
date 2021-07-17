<script lang="ts">
    import BlogItem from "../../utilities/BlogItem.svelte";
    import { blogs } from "../../store";
</script>

<div class="blogs-root space-y-40 w-full px-32 flex flex-col items-center">
    <h1 class="capitalize text-6xl relative text-center font-bold">
        Foood Blog Posts
    </h1>
    <div class="w-full flex justify-between items-center">
        {#each blogs as blog}
            <BlogItem {...blog} />
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../../utilities/_variables.scss";

    h1:first-child {
        width: max-content;
        &::before {
            content: "";
            position: absolute;
            width: 40%;
            left: 10%;
            bottom: -2rem;
            border: 3px solid $yellow;
        }
    }
</style>
