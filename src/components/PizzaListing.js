import React from "react";
import PizzaCard from "./PizzaCard";

function PizzaListing(props) {

    const { products, onAdd } = props;

    return (
        <main className="block col-2">
            <ul className="cards">
                {products.map((product) => (
                    <PizzaCard key={product.id} product={product} onAdd={onAdd} />
                ))}

            </ul>
        </main>
    );
}

export default PizzaListing;



