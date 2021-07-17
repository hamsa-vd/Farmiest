<script lang="ts">
    import Addons from "./sub-details/Addons.svelte";
    import Offers from "./sub-details/Offers.svelte";
    import fresh from "../../public/images/fresh.png";
    import Products from "./sub-details/Products.svelte";
    import Reviews from "./sub-details/Reviews.svelte";
    import Blogs from "./sub-details/Blogs.svelte";
</script>

<div
    class="details-root flex flex-col justify-start  items-center mt-32 space-y-32"
>
    <Offers />
    <Addons />
    <div class="w-full relative grid place-items-center">
        <img src={fresh} alt="fresh.png" class="w-full filter brightness-50" />
        <div
            class="overlay absolute w-full flex flex-col items-center justify-center space-y-20  h-full"
        >
            <h1 class="text-6xl text-white relative">Everyday Fresh & Clean</h1>
            <svg
                class="w-24 h-24"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="60" cy="60" r="60" fill="#FFBA43" />
                <path d="M84 60L48 80.7846L48 39.2154L84 60Z" fill="#FEFEFE" />
            </svg>
        </div>
    </div>
    <Products />
    <Reviews />
    <Blogs />
</div>

<style lang="scss">
    div.overlay {
        h1 {
            &::before {
                content: "";
                position: absolute;
                width: 40%;
                left: 20%;
                bottom: -2rem;
                border: 3px solid white;
            }
        }
    }
</style>
