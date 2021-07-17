<script lang="ts">
    import {
        ChevronDownIcon,
        GlobeIcon,
        MapPinIcon,
        SearchIcon,
        ShoppingBagIcon,
        UserIcon,
    } from "svelte-feather-icons";
</script>

<header class="flex justify-between items-center w-100 mx-16">
    <h1 class="logo text-4xl font-bold">Farmiest!</h1>
    <nav class="flex items-center">
        <a href="#footer" class="active"> Home </a>
        <a href="#footer">
            <span> Store </span>
            <ChevronDownIcon class="inline" size="16" strokeWidth={3} />
        </a>
        <a href="#footer"> Contact </a>
        <a href="#footer"> About </a>
    </nav>
    <ul class="flex">
        <li class="space-x-6">
            <MapPinIcon size="16" strokeWidth={3} />
            <SearchIcon size="16" strokeWidth={3} />
        </li>
        <li class="space-x-2">
            <UserIcon size="16" strokeWidth={3} />
            <p>Account</p>
        </li>
        <li class="space-x-2">
            <ShoppingBagIcon size="16" strokeWidth={3} />
            <p>Bag</p>
        </li>
        <li class="space-x-2">
            <GlobeIcon size="16" strokeWidth={3} />
            <span class="flex items-center">
                <p>En</p>
                <ChevronDownIcon size="16" strokeWidth={3} />
            </span>
        </li>
    </ul>
</header>

<style type="text/scss">
    @import "_variables.scss";

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
        margin: 0 0.25rem 0;
        padding: 0.25rem 1rem;
        font-weight: 600;
        &:first-child {
            position: relative;
            &::before {
                content: "";
                position: absolute;
                top: 0px;
                bottom: 0px;
                left: 50%;
                border: 1px solid black;
            }
        }
    }

    nav {
        a {
            font-weight: 600;
            font-size: 1.5rem;
            margin: 0 0.5rem 0;
            padding: 0.25rem 0.5rem;
            &.active,
            &:hover {
                color: $green;
                border-bottom: 4px solid $green;
            }
        }
    }
</style>
