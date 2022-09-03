import { useEffect, useState } from "react";
import { URI_API } from "../constants/constants";

export const usePicture = holiday => {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!holiday) return;

        fetch(`${URI_API}/image/${holiday}`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.status)
                }
                return response.json()
            })
            .then(data => {
                if (data.idImg) {
                    setData(data);
                }
            })
            .catch(err => console.log('err: ', err));
    }, [holiday]);

    return data;
}