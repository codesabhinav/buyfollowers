import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
    const [packageQuantity, setPackageQuantity] = useState(500);
    const [productData, setProductData] = useState(null);
    const [dynamicFields, setDynamicFields] = useState({}); 

    const handleDecrement = () => {
        if (packageQuantity > 0) {
            setPackageQuantity(packageQuantity - 100);
        }
    };

    const handleIncrement = () => {
        setPackageQuantity(packageQuantity + 100);
    };

    const setProduct = (data) => {
        setProductData(data);
    };

    const addDynamicField = (key, value) => {
        setDynamicFields((prevFields) => ({
            ...prevFields,
            [key]: value,
        }));
    };

    const removeDynamicField = (key) => {
        setDynamicFields((prevFields) => {
            const updatedFields = { ...prevFields };
            delete updatedFields[key];
            return updatedFields;
        });
    };

    return (
        <ProductContext.Provider
            value={{
                packageQuantity,
                setPackageQuantity,
                handleDecrement,
                handleIncrement,
                productData,
                setProduct,
                dynamicFields,
                addDynamicField,
                removeDynamicField,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
