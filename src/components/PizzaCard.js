import React from "react";

function PizzaCard(props) {

    const { product, onAdd } = props;

    return (
        <li className="card">
            <div className="image">
                <span className="price">${product.price}</span>
                <img src={product.image} alt={product.name} />
            </div>
            <div className="details">
                <strong>{product.name}</strong>
                <span> · {product.ingredients}</span>
                <span> · {product.cal} Cal</span>
            </div>
            <div>
                <button onClick={() => onAdd(product)}>Add to cart</button>
            </div>
        </li>
    );
}


export default PizzaCard;


  // когда я нажимаю на onClick на конкретной пицце на экране (один из множества элементов),
  // то он в виде объекта со своим Id, именем и др параметрами передается в функцию onAdd
  // я это делаю на уровне продукта так как Product описыавет все другие показанные на экране пиццы
  // т.е. это правило будет применимо ко всем элементам показанным на экране 
  // далее, я должен полученный объект бросить вверх до места где у меня сама функция onAdd для расчетом 


