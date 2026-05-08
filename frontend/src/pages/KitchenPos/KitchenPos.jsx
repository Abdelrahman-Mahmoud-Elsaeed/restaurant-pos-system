import { useState } from "react";
import styles from "./KitchenPos.module.css";
import Taps from "../../component/ui/Taps/Taps";
import Cards from "../../component/ui/Card/Cards";

import burger1 from "../../assets/images/Classic Cheeseburger.png";
import burger2 from "../../assets/images/Spicy Chicken Sandwich.png";
import burger3 from "../../assets/images/BBQ Bacon Burger.png";
import fries from "../../assets/images/French Fries.png";

const tabs = ["All Items", "Burgers", "Combos", "Sides", "Drinks", "Desserts"];

const products = [
    {
        image: burger1,
        title: "Classic Double Cheeseburger",
        description: "Beef patty, cheddar, lettuce, tomato, house sauce",
        price: 8.99,
        category: "Burgers",
        tag: {
            text: "POPULAR",
            type: "popular"
        },
    },

    {
        image: burger2,
        title: "Crispy Spicy Chicken",
        description: "Fried chicken breast, pickles, spicy mayo",
        price: 7.49,
        category: "Burgers",
        tag: {
            text: "SPICY",
            type: "spicy",
        },
    },

    {
        image: burger3,
        title: "Smokehouse BBQ Bacon",
        description: "Beef patty, bacon, onion rings, BBQ sauce",
        price: 10.99,
        category: "Burgers",
        tag: {
            text: "ONLY 3 LEFT",
            type: "warning",
        },
    },

    {
        image: fries,
        title: "Large Seasoned Fries",
        description: "House seasoning blend",
        price: 3.99,
        category: "Sides",
    },

];
function KitchenPos() {
    const [active, setActive] = useState("All Items");
    const filterProducts = active === "All Items" ? products : products.filter(
        (item) => item.category === active);
    return (
        <div className="container-fluid py-4">
            <div className={styles.tabs}>
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActive(tab)}
                    >
                        <Taps
                            text={tab}
                            variant={active === tab ? "primary" : "secondary"}
                        />
                    </div>
                ))}
            </div>
            <div className="row g-4">
                {filterProducts.map((item, index) => (
                    <div
                        className="col-lg-3 col-md-6"
                        key={index}
                    >
                        <Cards
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            tag={item.tag}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KitchenPos;