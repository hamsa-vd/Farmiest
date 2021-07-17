import Grocery1 from "../public/images/Grocery1.png";
import Salads from "../public/images/Salads.png";
import CartValue from "../public/images/CartValue.png";
import Grocery2 from "../public/images/Grocery2.png";
import Vegetables from "../public/images/Vegetables.png";
import FreshFood from "../public/images/FreshFood.png";
import SuperSalaads from "../public/images/SuperSalads.png";
import Chips from "../public/images/Chips.png";
import SideDish from "../public/images/SideDish.png";
import Bread from "../public/images/Bread.png";
import BoltHouse from "../public/images/Bolthouse.png";
import Blog from "../public/images/blog.png";

interface LandingOfferInterface {
    title: string;
    description: string;
    imgUrl: string;
    imgDescription: string;
}
export const landingOffers: LandingOfferInterface[] = [
    {
        title: "Grocery",
        description: "Fresh grocery delivered",
        imgUrl: Grocery1,
        imgDescription: "",
    },
    {
        title: "Salads",
        description: "Order nutritious salads",
        imgUrl: Salads,
        imgDescription: "Salads.png",
    },
    {
        title: "Cart Value",
        description: "Cart value review your cart",
        imgUrl: CartValue,
        imgDescription: "CartValue.png",
    },
    {
        title: "Grocery",
        description: "Fresh grocery delivered",
        imgUrl: Grocery2,
        imgDescription: "grocery.png",
    },
];

interface OfferInterface {
    imgUrl: string;
    offer: string;
    item: string;
}

export const offers: OfferInterface[] = [
    {
        imgUrl: Vegetables,
        offer: "Organically Produce",
        item: "Vegetables",
    },
    {
        imgUrl: FreshFood,
        offer: "Flat 30% off",
        item: "Fresh Food",
    },
    {
        imgUrl: SuperSalaads,
        offer: "Gluten-free",
        item: "Super Salads",
    },
];

export type StarCountType = 0 | 1 | 2 | 3 | 4 | 5;

export const starIndices = [1, 2, 3, 4, 5];

interface AddOnItemInterface {
    imgUrl: string;
    mealType?: string;
    foodItem: string;
    discountCost: number;
    cost?: number;
    stars?: StarCountType;
}

interface ProductItemInterface {
    imgUrl: string;
    item: string;
    cost: number;
    stars?: StarCountType;
}

export const productItems: ProductItemInterface[] = new Array(6).fill({
    imgUrl: Bread,
    item: "Bread",
    cost: 10,
});

export const addOnItems: AddOnItemInterface[] = new Array(2)
    .fill([
        {
            imgUrl: Chips,
            foodItem: "Chips",
            discountCost: 10,
        },
        {
            imgUrl: SideDish,
            foodItem: "Side Dish",
            cost: 10,
            discountCost: 8,
        },
        {
            imgUrl: Bread,
            foodItem: "Bread",
            discountCost: 7.5,
        },
        {
            imgUrl: BoltHouse,
            foodItem: "Bolthouse",
            discountCost: 100,
            stars: 5,
        },
    ])
    .flat();

interface UserInterface {
    name: string;
    imgUrl: string;
    job: string;
}
export const users: UserInterface[] = [
    {
        name: "Ms Maya Wohlgemuth",
        imgUrl: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
        job: "FBI special agent",
    },
    {
        name: "Mr Adem Numanoğlu",
        imgUrl: "https://randomuser.me/api/portraits/thumb/men/54.jpg",
        job: "Eccentric researcher",
    },
    {
        name: "Ms Afet Eronat",
        imgUrl: "https://randomuser.me/api/portraits/thumb/women/40.jpg",
        job: "Special Agent",
    },
    {
        name: "Monsieur Jason Marie",
        imgUrl: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
        job: "Front End Developer",
    },

    {
        name: "Mr Albert Baker",
        imgUrl: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
        job: "Block chain architect",
    },
    {
        name: "Mademoiselle Angelina Vidal",
        imgUrl: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
        job: "AI Engineer",
    },
];

interface BlogInterface {
    blogDate: string;
    imgUrl: string;
    itemCategory: string;
    userType: string;
    shortPoints: string[];
    description: string;
}

export const blogs: BlogInterface[] = new Array(3).fill({
    blogDate: "JANUARY 7, 2021",
    userType: "ADMIN",
    itemCategory: "VEGETABLES",
    shortPoints: ["Healthy Vegetables", "Salads To Try"],
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi viverra enim curabitur nec vulputate scelerisque. Sapien mattis ullamcorper nulla nec nibh. ",
    imgUrl: Blog,
});
