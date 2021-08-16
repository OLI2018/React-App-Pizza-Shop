import React, { useState, useEffect } from "react";
import PizzaListing from './PizzaListing';
import Basket from './Basket';

function OrderPizzaTab() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())
      .then(data => setProducts(data));
  }, [])


  // сначала карзина пуста, это пустой массив и там нет ничего 
  // я говорю, что cartItems = пустой массив в начала

  //1. при нажатии на onClick я взять текущий product как объект и пробросил его до сего уровня 
  //2. функция onAdd берет в себя данный объект со всеми его параметрами 
  //3. в {} я пишу код на исполнение, который потом будет возвращен в виде некого нового значения 
  //4. полученный результат расчету функции onAdd я потом пробрушу вниз до элемента карзина, чтоб карзина знала что показывать 
  //5. изначально cartItesm пустой, но потом его состояние будет менся и я хочу понять если ли там уже ранее добавленный элемент или нет. 
  // Если есть, до я должен увеличить кол-во элементов, если нет, то я его должен добавить и обозначить кол-во равное 1.
  //6. я вызываю метод find на содержимом карзины. Для каждого текущего элемента карзины я беру его Id и сравниваю его с id продукта, который я передал в данную функцию.
  // Если они равны, то я верну первый найденй элемент, который удовлетворяет правилу сравнения. Если я ничего не найду, то я верну undegined. Я верну весь объект с данным ID 
  //7. если продукт есть, то я меняю state с текущего на новое значение или передаю найденный Id в if  утверждение. 
  //8. Я прохожу по массиву карзины посредством метода map, для каждого элемента внутри карзины я сравниваю его с id переданного продукта, 
  // если он равны, то такой продукт уже есть в карзине и я должен увеличить кол-во
  // я создаю новый объект в который я копирую найденный существующй объект, далее я создаю новый ключ и увеличиваю значение до 1, так я кон-ю кол-во внутри 
  // если id не равны для переданного продукта и существующего в карзине, то я оставляю без изменений
  // еслия метод find возвращает undefined то я исполняю else код
  // внутри else я меняю state с пустой карзины на первую запись продукта, для этого я создаю новый объект 
  // пустой cartItems как есть, в него я вставляю полученный объект product, и присваиваю значение 1 
  // на выходе я получаю либо первый объект для карзины либо увеличенное значение в кол-ве для существующего объекта в карзине 
  // я должен вернут данный объкт вниз в карзину, так как basket показыват данный объект в DOM
  
  // adding items to cart 
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  // removing items from cart 
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <div className="row">
        <PizzaListing products={products} onAdd={onAdd} />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default OrderPizzaTab;

// я бросаю onAdd вверх до этого уровня, тут я пишу саму функцию на исполнение 
// так как карзина это брат для product то для того, чтоб сказать что-то карзине, я должен данные бросить вниз снова 
