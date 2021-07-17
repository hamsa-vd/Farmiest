<script lang="ts">
    import ReviewItem from "../../utilities/ReviewItem.svelte";
    import { users as storeUsers } from "../../store";
    let start = 0;
    let end = 3;
    $: users = storeUsers.slice(start, end);
    let selectedThumb: number = 0;
    const handlePagination = (idx) => {
        selectedThumb = idx;
        start = 0 + idx;
        end = 3 + idx;
    };
</script>

<div
    class="reviews-root bg-green w-full flex flex-col px-32 py-16 space-y-20 items-center"
>
    <h1 class="capitalize text-6xl text-white relative text-center">
        what our customer says
    </h1>
    <div class="w-full flex justify-between items-center">
        {#each users as user}
            <ReviewItem {...user} />
        {/each}
    </div>
    <div class="pagination flex space-x-3">
        {#each [0, 1, 2, 3] as idx}
            <svg
                width="120"
                height="4"
                viewBox="0 0 120 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                on:click={() => handlePagination(idx)}
            >
                <line
                    x1="2"
                    y1="2"
                    x2="118"
                    y2="2"
                    stroke="#FAFAFA"
                    stroke-opacity={selectedThumb === idx ? 1 : 0.5}
                    stroke-width="4"
                    stroke-linecap="round"
                />
            </svg>
        {/each}
    </div>
</div>

<style lang="scss">
    h1:first-child {
        width: max-content;
        &::before {
            content: "";
            position: absolute;
            width: 40%;
            left: 20%;
            bottom: -2rem;
            border: 3px solid white;
        }
    }
    div.pagination {
        svg:hover {
            cursor: pointer;
        }
    }
</style>
