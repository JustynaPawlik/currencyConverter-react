import { useState } from "react";
import { FormFieldset, Header, FormButton, Loading, Failure } from "./styled";
import { Result } from "../Result";
import Container from "../Container";
import { Clock } from "../Clock";
import axios from "axios";
import { useRatesData } from "../useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit} >
            <FormFieldset>
                <Header>kantor
                </Header>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Poczekaj chwilę... <br />Pobieram kursy walut z Europejskiego Banku Centralnego 😉
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (
                            <Failure>
                                Ups... Coś poszło nie tak. Sprawdź połączenie z internetem 🙁
                            </Failure>
                        ) : (
                            <>
                                <Clock />
                                <label>
                                    <span>Kwota do wymiany (PLN)*&nbsp;</span>
                                    <input
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        type="number"
                                        step="any"
                                        placeholder="Wpisz kwotę..."
                                        min="1"
                                        required
                                    />
                                </label>
                                <p>
                                    <label>
                                        Wybierz walutę&nbsp;
                                        <select
                                            value={currency}
                                            onChange={({ target }) => setCurrency(target.value)}
                                        >
                                            {Object.keys(ratesData.rates).map(((currency) => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
                                                </option>
                                            )))}
                                        </select>
                                    </label>
                                </p>
                            </>
                        )
                    )}
            </FormFieldset>
            <p>
                <FormButton>Policz kurs</FormButton>
            </p> Otrzymasz:
            <Result result={result} />
        </form>
    );
};

export default Form;