import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getRatesData = () => {
            axios({
                url: ("https://api.exchangerate.host/latest?base=PLN")
            })
                .then(response => {
                    setRatesData({
                        status: response.data.rates ? "success" : "error",
                        date: response.data.date,
                        rates: response.data.rates
                    })
                })
                .catch((error) => {
                    setRatesData({
                        state: "error",
                    });
                })
        };

        setTimeout(getRatesData, 1_000);
    }, []);
    return ratesData;
};

