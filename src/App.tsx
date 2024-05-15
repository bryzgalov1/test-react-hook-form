import React, { useMemo, useState } from 'react';
import TestForm, { TValues } from './TestForm';

function App() {
    const [countInputs, setCountInputs] = useState(10);

    const values: TValues = useMemo(() => {
        const data: TValues = [...(new Array(countInputs))].reduce((acc, _, index) => {
            const key = `field--${index}`;
            return {
                ...acc,
                [key]: `${index}`,
            };
        }, {});

        return data
    }, [
        countInputs,
    ]);

    return (
        <div className="App">
            <div className="App__count">
                <span>countInputs: </span>
                <input
                    type='number'
                    value={countInputs}
                    onChange={(event) => {
                        const value = +event.target.value;
                        if (value > 1000) {
                            alert('Max 1000 !');
                        } else {
                            setCountInputs(value);
                        }
                    }}
                />
            </div>

            <TestForm values={values} key={countInputs} />
        </div>
    );
}

export default App;
