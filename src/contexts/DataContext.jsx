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
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1fRevaQbVfXS3punDlP0nD_q9LisHctXlg&s",
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