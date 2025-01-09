import React, {createContext, useState} from 'react';

const TitleContext = createContext();

export const TitleProvider  = ( { children }) => {
    const [titles, setTitles ] = useState({
        mainTitle: "Popular Products" ,
        subTitles: 'Exclusive Selection',
        boysCollectionTitle: 'Boys Collection',
        girlsCollectionTitle: 'Girls Collection',
    });

    return (
        <TitleContext.Provider value={{titles, setTitles }} >
            {children}
        </TitleContext.Provider>
    )
}

export default TitleContext;