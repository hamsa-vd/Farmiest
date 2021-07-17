<script lang="ts">
    import Header from "../utilities/Header.svelte";
    import Hero from "../../public/images/Hero.png";
    import LandingOfferItems from "../utilities/LandingOfferItems.svelte";
    import { landingOffers } from "../store";
    import { GithubIcon } from "svelte-feather-icons";
</script>

<div class="p-10 px-16 landing-root relative">
    <Header />
    <main class="flex flex-col justify-center">
        <div class="flex justify-between w-full">
            <h1>organic</h1>
            <div class="flex flex-col justify-evenly items-start">
                <div>
                    <p class="text-6xl font-bold">
                        Live on <span class="text-green block my-7">
                            fruits & vegetables
                        </span> to live Healthy
                    </p>
                    <p class="text-3xl mt-7 pb-2 border-b-2 w-max">
                        100% Healthy & Fresh
                    </p>
                </div>
                <div>
                    <button class="text-lg px-8 py-3 font-bold">
                        Shop Now
                    </button>
                </div>
            </div>
            <div>
                <img src={Hero} alt="man offering vegetables" />
            </div>
        </div>
    </main>
    <div class="flex px-5 py-10 absolute justify-around items-center">
        {#each landingOffers as landingOfferItem}
            <LandingOfferItems {...landingOfferItem} />
        {/each}
    </div>
    <a
        href="https://github.com/hamsa-vd/Farmiest"
        target="_blank"
        class="github-link"
    >
        <GithubIcon size="36" class="z-50" />
    </a>
</div>

<style lang="scss">
    @import "../utilities/_variables.scss";
    div.landing-root {
        min-height: 100vh;
        background: linear-gradient(
            90.03deg,
            #eedab5 0.03%,
            #e6f8ef 99.32%,
            #e6f8ef 99.32%
        );
        display: flex;
        flex-direction: column;
        main {
            flex-grow: 1;
            & > div {
                h1 {
                    writing-mode: tb-rl;
                    transform: rotateZ(180deg);
                    font-size: 10rem;
                    color: transparent;
                    text-transform: capitalize;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: $green;
                    font-weight: bolder;
                }
                & > div {
                    & > div {
                        button {
                            background-color: black;
                            color: white;
                            border-radius: 2rem;
                        }
                    }
                }
            }
        }
        & > div {
            background-color: white;
            bottom: -2rem;
            left: 8rem;
            right: 8rem;
            box-shadow: 0px 1px 30px rgba(36, 38, 43, 0.233);
            border-radius: 5px;
        }
    }
    a.github-link {
        position: fixed;
        display: grid;
        place-items: center;
        bottom: 3rem;
        right: 3rem;
        padding: 1.5em 1.5em;
        color: white;
        z-index: 49;
        animation: git-anim 1.5s cubic-bezier(0.63, 0.41, 0.68, 1.15) forwards;
        background: linear-gradient(91.06deg, #008000 0.91%, #ffd700 97.81%);
        border-radius: 50%;
        box-shadow: inset 0px 0px 1em rgba(0, 0, 0, 0.178);
        &:hover {
            cursor: pointer;
            box-shadow: inset 1px 2px 1em rgba(0, 0, 0, 0.459);
        }
    }
    @keyframes git-anim {
        0% {
            transform: scale(2);
            bottom: 50%;
            right: 50%;
        }
        100% {
            transform: scale(1);
            bottom: 3rem;
            right: 3rem;
        }
    }
</style>
