import { createContext, useContext, useState } from "react";

// 1. Create a Context
const DataContext = createContext();

// 2. Create a Provider
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "data:image/jpeg;base64,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",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjpBF1wTWn_veofZQVA9_ahTFsnmkLi7qzA&s",
            "images": [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
        }
    );   
    
   return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    ) 
}

export const useData = () => useContext(DataContext);