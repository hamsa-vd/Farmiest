<script lang="ts">
    export let title: string;
    export let description: string;
    export let imgUrl: string;
    export let imgDescription: string;
</script>

<div class="flex">
    <div><img src={imgUrl} alt={imgDescription} /></div>
    <div class="ml-4 flex flex-col justify-evenly">
        <h2 class="text-green text-2xl">{title}</h2>
        <h5 class="text-lg">{description}</h5>
    </div>
</div>

<style lang="scss">
</style>
