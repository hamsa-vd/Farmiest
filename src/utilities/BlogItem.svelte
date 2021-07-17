<script lang="ts">
    import { UserIcon } from "svelte-feather-icons";

    export let blogDate: string;
    export let imgUrl: string;
    export let itemCategory: string;
    export let userType: string;
    export let shortPoints: string[];
    export let description: string;
</script>

<div class="blog-item-root flex flex-col shadow-xl">
    <div class="w-full">
        <img
            src={imgUrl}
            alt={imgUrl.split("/")[-1]}
            class="w-full object-cover"
        />
    </div>
    <div class="flex justify-start space-x-3 p-3">
        <h3 class="text-green uppercase horizontal-text text-right font-light">
            {blogDate}
        </h3>
        <div class="blog-item-body flex flex-col items-start space-y-3">
            <div class="flex space-x-3 capitalize">
                <h4 class="text-green flex items-center text-sm">
                    <UserIcon size="16" />
                    <span class="pl-1">
                        {userType}
                    </span>
                </h4>
                <h4 class="text-white bg-green px-2 rounded text-sm font-light">
                    {itemCategory}
                </h4>
            </div>
            <div>
                {#each shortPoints as point}
                    <h2 class="text-lg font-bold">{point}</h2>
                {/each}
            </div>
            <p class="text-p text-sm">{description}</p>
            <p class="text-green py-3 text-sm">Read more &#8594;</p>
        </div>
    </div>
</div>

<style lang="scss">
    div.blog-item-root {
        width: max(350px, 25vw);
    }
    h3.horizontal-text {
        writing-mode: tb-rl;
        transform: rotateZ(180deg);
    }
</style>
