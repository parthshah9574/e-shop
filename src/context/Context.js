import React, {createContext} from "react";
import {useReducer, useContext} from "react";
import {faker} from "@faker-js/faker";
import {cartReducer} from "./Reduser";

const Cart = createContext();
const Context = ({children}) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price,
        image: faker.image.image(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>; //<div>Hello</div>;
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};
