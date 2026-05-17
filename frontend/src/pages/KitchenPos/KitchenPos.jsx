import { useState } from "react";
import styles from "./KitchenPos.module.css";
import Tab from "../../component/ui/Taps/Taps"; // Make sure this matches your folder name!
import Cards from "../../component/ui/Card/Cards";
import { useOrder } from "../../context/Order.context"; // Import your context

// Images
import burger1 from "../../assets/images/Classic Cheeseburger.png";
import burger2 from "../../assets/images/Spicy Chicken Sandwich.png";
import burger3 from "../../assets/images/BBQ Bacon Burger.png";
import fries from "../../assets/images/French Fries.png";

const tabs = ["All Items", "Burgers", "Combos", "Sides", "Drinks", "Desserts"];

// Added 'id' fields so the cart knows exactly which item is which
const products = [
  {
    id: 1, 
    image: burger1,
    title: "Classic Double Cheeseburger",
    description: "Beef patty, cheddar, lettuce, tomato, house sauce",
    price: 8.99,
    category: "Burgers",
    tag: {
      text: "POPULAR",
      type: "popular",
    },
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    image: fries,
    title: "Large Seasoned Fries",
    description: "House seasoning blend",
    price: 3.99,
    category: "Sides",
  },
];

function KitchenPos() {
  const [active, setActive] = useState("All Items");
  
  // Bring in the addToCart function from our context
  const { addToCart } = useOrder(); 

  const filterProducts =
    active === "All Items"
      ? products
      : products.filter((item) => item.category === active);

  return (
    <div className="container-fluid py-4">
      {/* Cleaned up tab mapping and added standard layout classes */}
      <div className={`d-flex gap-3 flex-wrap mb-4 ${styles.tabs}`}>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            text={tab}
            active={active === tab}
            onClick={() => setActive(tab)}
          />
        ))}
      </div>

      <div className="row g-4">
        {filterProducts.map((item) => (
          <div className="col-lg-3 col-md-6" key={item.id}>
            <Cards
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              tag={item.tag}
              onAdd={() => addToCart(item)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KitchenPos;