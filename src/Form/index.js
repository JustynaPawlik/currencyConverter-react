import { useState } from "react";
import { FormFieldset, Header, FormButton } from "./styled";
import { Result } from "../Result";
import { currencies } from "../currencies";
import Container from "../Container";
import { Clock } from "../Clock";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form onSubmit={onSubmit} >
            <FormFieldset>
                <Header>kantor
                </Header>
                <Clock />
                <label>
                    <span>Kwota do wymiany (PLN)* </span>
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
                        <span>Wybierz walutę </span>
                        <select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
            </FormFieldset>
            <p>
                <FormButton>Policz kurs</FormButton>
            </p> Otrzymasz:
            <Result result={result} />
        </form>
    );
};

export default Form;