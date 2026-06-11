export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    return matchingProduct;
}

export const products = [
    {
        id: "01",
        image: "images/products/5-ideas-from-global-diplomacy.jpg",
        name: "5 Ideas From Global Diplomacy",
        rating: {
            stars: 4.5,
            count: 72
        },
        priceForint: 3999
    },
    {
        id: "02",
        image: "images/products/a-storytelling-workbook.jpg",
        name: "A Storytelling Workbook For Beginners",
        rating: {
            stars: 5.0,
            count: 41
        },
        priceForint: 4999
    },
    {
        id: "03",
        image: "images/products/all-the-letters.jpg",
        name: "All The Letters I Should Have Sent",
        rating: {
            stars: 5.0,
            count: 112
        },
        priceForint: 5999
    },
    {
        id: "04",
        image: "images/products/being-the-red-flag.jpg",
        name: "Being The Red Flag",
        rating: {
            stars: 4.5,
            count: 171
        },
        priceForint: 5999
    },
    {
        id: "05",
        image: "images/products/book-of-psalms.jpg",
        name: "Book Of Psalms",
        rating: {
            stars: 3.5,
            count: 50
        },
        priceForint: 6999
    },
    {
        id: "06",
        image: "images/products/company-of-one.jpg",
        name: "Company Of One",
        rating: {
            stars: 4.0,
            count: 112
        },
        priceForint: 6999
    },
    {
        id: "07",
        image: "images/products/goal-planner.jpg",
        name: "Goal Planner",
        rating: {
            stars: 5.0,
            count: 252
        },
        priceForint: 4999
    },
    {
        id: "08",
        image: "images/products/happy.jpg",
        name: "Happy",
        rating: {
            stars: 5.0,
            count: 12
        },
        priceForint: 4999
    },
    {
        id: "09",
        image: "images/products/how-innovation-works.jpg",
        name: "How Innovation Works",
        rating: {
            stars: 5.0,
            count: 115
        },
        priceForint: 3999
    },
    {
        id: "10",
        image: "images/products/how-to-stop-worrying.jpg",
        name: "How To Stop Worrying And Start Living",
        rating: {
            stars: 4.0,
            count: 38
        },
        priceForint: 5999
    },
    {
        id: "11",
        image: "images/products/milk-and-honey.jpg",
        name: "Milk And Honey",
        rating: {
            stars: 4.5,
            count: 21
        },
        priceForint: 5999
    },
    {
        id: "12",
        image: "images/products/the-cronicles-of-narnia.jpg",
        name: "The Cronicles Of Narnia",
        rating: {
            stars: 4.0,
            count: 49
        },
        priceForint: 5999
    },
    {
        id: "13",
        image: "images/products/the-fine-print.jpg",
        name: "The Fine Print",
        rating: {
            stars: 3.0,
            count: 25
        },
        priceForint: 7999
    },
    {
        id: "14",
        image: "images/products/the-picture-of-dorian-grey.jpg",
        name: "The Picture Of Dorian Grey",
        rating: {
            stars: 5.0,
            count: 16
        },
        priceForint: 7999
    },
    {
        id: "15",
        image: "images/products/the-psychology-of-money.jpg",
        name: "The Psychology Of Money",
        rating: {
            stars: 3.0,
            count: 12
        },
        priceForint: 3999
    },
    {
        id: "16",
        image: "images/products/the-two-towers.jpg",
        name: "The Two Towers",
        rating: {
            stars: 5.0,
            count: 327
        },
        priceForint: 3999
    },
    {
        id: "17",
        image: "images/products/twisted-love.jpg",
        name: "Twisted Love",
        rating: {
            stars: 5.0,
            count: 11
        },
        priceForint: 5999
    },
    {
        id: "18",
        image: "images/products/wuthering-heights.jpg",
        name: "Wuthering Heights",
        rating: {
            stars: 4.0,
            count: 138
        },
        priceForint: 4999
    },
    {
        id: "19",
        image: "images/products/your-soul-is-a-river.jpg",
        name: "Your Soul Is A River",
        rating: {
            stars: 5.0,
            count: 30
        },
        priceForint: 4999
    },
    {
        id: "20",
        image: "images/products/zero-to-one.jpg",
        name: "Zero To One",
        rating: {
            stars: 4.0,
            count: 120
        },
        priceForint: 5999
    }
]