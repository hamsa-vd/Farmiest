<script lang="ts">
    export let name: string;
    export let imgUrl: string;
    export let job: string;
    // const getRandomUser = async () =>
    //     new Promise(async (res, rej) => {
    //         try {
    //             const {
    //                 results: [
    //                     {
    //                         name: { title, first, last },
    //                         picture: { thumbnail },
    //                     },
    //                 ],
    //             } = await (await fetch("https://randomuser.me/api/")).json();
    //             res({
    //                 name: title + " " + first + " " + last,
    //                 imgUrl: thumbnail,
    //             });
    //         } catch (error) {
    //             console.log(error);
    //             rej(error);
    //         }
    //     });
</script>

<div
    class="review-item-root flex flex-col justify-between bg-white p-5 rounded-xl"
>
    <div class="w-full flex justify-between items-center text-p">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam.</p>
        <h1 class="quotes text-8xl font-times">“</h1>
    </div>
    <div class="w-full p-3 relative bg-green rounded-lg">
        <div class="capitalize text-white">
            <h3 class="text-base">{name}</h3>
            <h4 class="text-sm">{job}</h4>
        </div>
        <img
            src={imgUrl}
            alt={name + ".jpg"}
            class="w-16 object-cover absolute right-4"
        />
    </div>
</div>

<style lang="scss">
    div.review-item-root {
        width: 25vw;
        min-height: 250px;
        img:only-of-type {
            top: -2rem;
            border: 3px solid white;
            border-radius: 5px;
        }

        h1.quotes {
            transform: rotateX(180deg) rotateY(180deg);
            margin-top: -2rem;
        }
    }
</style>
