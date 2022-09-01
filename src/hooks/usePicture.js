import { useEffect, useState } from "react";
import { URI_API } from "../constants/constants";

export const usePicture = holiday => {
    const [picture, setPicture] = useState({});

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
                if (data) {
                    setPicture(data);
                }
            })
            .catch(err => console.log('err: ', err));
    }, [holiday]);

    return { picture };
}