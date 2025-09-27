import React, { useState } from 'react';

export const ProductContext = React.createContext({
    products: [],
    toggleFav: () => {}
});

const initialProducts = [
    {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
    },
    {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
    },
    {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
    },
    {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
    }
];


const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState(initialProducts);

    const toggleFavorite = id => {
        setProductList(curList => {
            const prodIndex = curList.findIndex(
                p => p.id === id
            );
            const newFavStatus = !curList[prodIndex].isFavorite;
            const updatedProducts = [...curList];
            updatedProducts[prodIndex] = {
                ...curList[prodIndex],
                isFavorite: newFavStatus
            };
            return updatedProducts;
        })
    };

    return (
        <ProductContext.Provider value={{products: productList, toggleFav: toggleFavorite}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;