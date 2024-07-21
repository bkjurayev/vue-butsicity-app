import { ref } from "vue";

const products = ref([
    {
        id: 0,
        title: "Vapor",
        subtitle: "Price is incl. 19% VAT",
        description:
            "Nike Air Zoom Mercurial Superfly 9 Elite FG Mad Brilliance - Pink Foam/Black",
        price: 279.95,
        img: require("../assets/imgs/boots/boot1.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
    {
        id: 1,
        title: "Mercurial ",
        subtitle: "Price is incl. 19% VAT",
        description:
            "Nike Air Zoom Mercurial Superfly 9 Elite FG Mad Ready - Lemonade/Black",
        price: 181.95,
        img: require("../assets/imgs/boots/boot2.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
    {
        id: 2,
        title: "Mercurial Vapor",
        subtitle: "Price is incl. 19% VAT",
        description:
            "Nike Air Zoom Mercurial Vapor 15 Elite FG - Black/Dark Smoke Grey/Summit White/Volt",
        price: 250,
        img: require("../assets/imgs/boots/boot3.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
    {
        id: 3,
        title: "Zoom Mercurial",
        subtitle: "Price is incl. 19% VAT",
        description:
            "Nike Air Zoom Mercurial Vapor 15 Elite FG Dream Speed 8 - Green Strike/Black/Stadium Green",
        price: 242.95,
        img: require("../assets/imgs/boots/boot4.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
    {
        id: 4,
        title: "Vapor 15",
        subtitle: "Price is incl. 19% VAT",
        description:
            "Nike Air Zoom Mercurial Vapor 15 Elite FG Ready - Bright Crimson/White/Black",
        price: 207.95,
        img: require("../assets/imgs/boots/boot5.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
    {
        id: 5,
        title: "Phantom GX",
        subtitle: "Price is incl. 19% VAT",
        description:
            "Nike Phantom GX Elite FG Peak Ready - Hyper Turquoise/Black/Fuchsia Dream/White",
        price: 207.95,
        img: require("../assets/imgs/boots/boot6.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
    {
        id: 6,
        title: "Nike Phantom",
        subtitle: "Price is incl. 19% VAT",
        description:
            "Nike Phantom GX II Elite FG Vortex - Green Glow/Black LIMITED EDITION",
        price: 242.95,
        img: require("../assets/imgs/boots/boot7.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
    {
        id: 7,
        title: "Nike Air Zoom",
        subtitle: "Price is incl. 19% VAT",
        description:
            "Nike Air Zoom Mercurial Vapor 15 Elite FG Ready - Bright Crimson/White/Black",
        price: 207.95,
        img: require("../assets/imgs/boots/boot8.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
    {
        id: 8,
        title: "adidas Predator",
        subtitle: "Price is incl. 19% VAT",
        description:
            "adidas Predator Elite Fold-over Tongue FG Dark Spark - Core Black/Carbon/Gold Metallic",
        price: 279.95,
        img: require("../assets/imgs/boots/boot9.jpg"),
        oldprice: "30000",
        brand: "adidas",
        sizes: ["38", "41"],
        colors: ["blue"],
        gender: "man",
        rating: "",
    },
]);

export default function useProducts() {
    return {
        products
    }
}
