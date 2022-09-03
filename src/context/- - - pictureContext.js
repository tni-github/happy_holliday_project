import { createContext } from "react";
import { URI_API } from "../constants/constants";
import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";

export const pictureContext = createContext({});

export const PictureContextProvider = ({ children }) => {
    const holiday = useSelector(state => state.holidays.holiday);
    const [{ urlImg }] = useFetch(holiday ? `${URI_API}/image/${holiday}` : '');

    return (
        <pictureContext.Provider value={{ urlImg }}>
            {children}
        </pictureContext.Provider>
    )
}