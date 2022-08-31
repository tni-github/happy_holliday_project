import { createContext, useState } from "react";

export const pictureContext = createContext({});

export const PictureContextProvider = ({ children }) => {
    const [picture, setPicture] = useState('');

    return (
        <pictureContext.Provider value={{ picture, setPicture }}>
            {children}
        </pictureContext.Provider>
    )
}