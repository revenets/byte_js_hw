const products = [
  {
    name: 'Iphone 12',
    brand: 'Apple',
    price: 3200000,
    properties: ['Best camera', 'Fast memory', 'Apple A12 Processor'],
  },
  {
    name: 'Galaxy S20 Ultra',
    brand: 'Samsung',
    price: 2900000,
    properties: ['120 hz screen', 'Water resistance'],
  },
  {
    name: 'MI 9',
    brand: 'Xiaomi',
    price: 1300000,
    properties: ['Best price', 'Pay less - get more!'],
  },
];

const renderProductCards = arr => {
    const productsContainer = document.createElement ('div');

    const productCard = arr
        .map (item => {
            let itemProps = item.properties.map((elem) => `<li>${elem}</li>`).join("");

            return `<h2>${item.name}</h2>
                    <h3>${item.brand}</h3>
                    <ul>
                        ${itemProps}
                    </ul>`;
        })
        .join ('');

    productsContainer.innerHTML = productCard;
    document.body.append(productsContainer);
};

renderProductCards(products);