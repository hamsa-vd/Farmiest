<script lang="ts">
    import {
        ChevronRightIcon,
        FacebookIcon,
        InstagramIcon,
        LinkedinIcon,
        MailIcon,
        MapPinIcon,
        PhoneIcon,
        TwitterIcon,
    } from "svelte-feather-icons";
    const links = ["My account", "Checkout", "Wishlist", "Shopping Cart"];
    const info = ["About us", "Our Team", "Contact us", "blog"];
</script>

<footer class="w-full" id="footer">
    <div
        class="w-full flex px-32 mt-40 space-x-5 justify-between items-start py-32"
    >
        <div class="about flex flex-col items-start space-y-3">
            <h1 class="text-4xl font-bold">Farmiest</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                enim volutpat tristique urna. Diam, id vitae adipiscing purus
                magna dapibus ipsum urna sed.
            </p>
            <ul class="flex space-x-3">
                <li><FacebookIcon size="32" class="f-icon" /></li>
                <li><TwitterIcon size="32" /></li>
                <li><InstagramIcon size="32" /></li>
                <li><LinkedinIcon size="32" /></li>
            </ul>
        </div>
        <div class="link space-y-3">
            <h2 class="text-2xl font-bold">Links</h2>
            <ul class="flex flex-col space-y-3">
                {#each links as link}
                    <li class="text-p text-xl flex space-x-3 items-center">
                        <ChevronRightIcon size="16" strokeWidth={3} />
                        <span> {link} </span>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="information space-y-3">
            <h2 class="text-2xl font-bold">Information</h2>
            <ul class="flex flex-col space-y-3">
                {#each info as infoItem}
                    <li class="text-p text-xl flex space-x-3 items-center">
                        <ChevronRightIcon size="16" strokeWidth={3} />
                        <span class="capitalize"> {infoItem} </span>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="contact space-y-3">
            <h2 class="text-2xl font-bold">Contact</h2>
            <ul class="flex flex-col space-y-3">
                <li class="text-yellow space-x-3 text-xl flex items-start">
                    <MapPinIcon size="24" />
                    <span class="text-p">
                        1234 North Avenue , South West, IN 360001
                    </span>
                </li>
                <li class="text-yellow space-x-3 text-xl flex items-start">
                    <MailIcon size="24" />
                    <span class="text-p"> jondoe@farmiest.com </span>
                </li>
                <li class="text-yellow space-x-3 text-xl flex items-start">
                    <PhoneIcon size="24" />
                    <span class="text-p"> +0123456789 </span>
                </li>
            </ul>
        </div>
    </div>
    <hr />
    <p class="copyright w-full text-center text-p py-3">
        Copyright 2021 Farmiest All Rights Reserved.
    </p>
</footer>

<style lang="scss">
    @import "../utilities/_variables.scss";
    footer {
        background-color: #e2f9ee;
        & > div {
            & > div {
                max-width: 25%;
                &.about {
                    ul {
                        li {
                            background-color: $green;
                            color: white;
                            padding: 0.5em;
                            border-radius: 0.5em;
                        }
                    }
                }
            }
        }
    }
</style>
