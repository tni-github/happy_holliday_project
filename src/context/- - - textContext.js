import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { URI_API } from "../constants/constants";
import { useSelector } from "react-redux";

export const textContext = createContext('');

export const TextContextProvider = ({ children }) => {
    const holiday = useSelector(state => state.holidays.holiday);
    const [{ text }] = useFetch(holiday ? `${URI_API}/text/${holiday}` : '');

    return (
        <textContext.Provider value={{ text }}>
            {children}
        </textContext.Provider>
    )
}