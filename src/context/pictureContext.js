import { createContext, useContext } from "react";
import { usePicture } from "../hooks/usePicture";
import { holidaysContext } from "./holidaysContext";

export const pictureContext = createContext({});

export const PictureContextProvider = ({ children }) => {
    const { holiday } = useContext(holidaysContext);
    const { picture } = usePicture(holiday);

    return (
        <pictureContext.Provider value={{ picture }}>
            {children}
        </pictureContext.Provider>
    )
}