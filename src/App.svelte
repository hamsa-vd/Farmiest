<script lang="ts">
    import Landing from "./pages/Landing.svelte";
    import Details from "./pages/Details.svelte";
    import Footer from "./pages/Footer.svelte";
</script>

<svelte:head>
    <title>Farmiest!</title>
</svelte:head>

<div>
    <Landing />
    <Details />
    <Footer />
</div>

<style lang="postcss" global>
    @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
    @import url(https://fonts.googleapis.com/css?family=Satisfy:regular);

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    html {
        scroll-behavior: smooth;
    }

    *,
    *::before,
    *::after {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: "Poppins", "Lucida Sans", "Lucida Sans Regular",
            "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
</style>
