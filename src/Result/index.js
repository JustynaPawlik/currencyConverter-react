import { FormResult, SourceRates } from "./styled";

export const Result = ({ result }) => (
    <FormResult>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
                <SourceRates>Kursy walut pobierane są z Europejskiego Banku Centralnego na aktualny dzień.</SourceRates>
            </>
        )}
    </FormResult>
);

export default Result;