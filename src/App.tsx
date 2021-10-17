import './App.css';
import React, { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';
import * as S from './App.style';

const cdi: number = 0.0615;

function App() {

    const [initialDeposit, setInitialDeposit] = useState<number>(800);
    const [monthlyDeposit, setMonthlyDeposit] = useState<number>(200);
    const [yearsToWithdraw, setYearsToWithdraw] = useState<number>(3);

    const depositedValue = (initialDeposit + (monthlyDeposit * 12 * yearsToWithdraw));
    const calculatedEstimate = depositedValue * Math.pow(1 + cdi, yearsToWithdraw);

    return (
        <S.Container>
            <div>
                <S.InputWrapper>
                    <div>
                        <label htmlFor="initialDeposit">
                            Depósito inicial
                        </label>
                        <CurrencyInput
                            prefix={"R$ "}
                            id="initialDeposit"
                            name="initialDeposit"
                            placeholder="initialDeposit"
                            defaultValue={initialDeposit}
                            value={initialDeposit}
                            decimalsLimit={2}
                            onValueChange={(value, name, values) => {
                                setInitialDeposit(values?.float as number);
                            }}
                        />
                    </div>
                    <S.Buttons>
                        <S.RoundButton onClick={() => {setInitialDeposit(prevState => (prevState + 100))}}>+</S.RoundButton>
                        <S.RoundButton onClick={() => {setInitialDeposit(prevState => prevState >= 100 ? (prevState - 100) : 0)}}>-</S.RoundButton>
                    </S.Buttons>
                </S.InputWrapper>

                <S.InputWrapper>
                    <div>
                        <label htmlFor="monthlyDeposit">
                            Todo mês depositando
                        </label>
                        <CurrencyInput
                            prefix={"R$ "}
                            id="monthlyDeposit"
                            name="monthlyDeposit"
                            placeholder="monthlyDeposit"
                            defaultValue={monthlyDeposit}
                            value={monthlyDeposit}
                            decimalsLimit={2}
                            onValueChange={(value, name, values) => {
                                setMonthlyDeposit(values?.float as number);
                            }}
                        />
                    </div>
                    <S.Buttons>
                        <S.RoundButton onClick={() => {setMonthlyDeposit(prevState => (prevState + 100))}}>+</S.RoundButton>
                        <S.RoundButton onClick={() => {setMonthlyDeposit(prevState => prevState >= 100 ? (prevState - 100) : 0)}}>-</S.RoundButton>
                    </S.Buttons>
                </S.InputWrapper>

                <S.InputWrapper>
                    <div>   
                        <label htmlFor="yearsToWithdraw">
                            Resgate em
                        </label>
                        <CurrencyInput
                            suffix={" anos"}
                            id="yearsToWithdraw"
                            name="yearsToWithdraw"
                            placeholder="yearsToWithdraw"
                            defaultValue={yearsToWithdraw}
                            value={yearsToWithdraw}
                            decimalsLimit={2}
                            onValueChange={(value, name, values) => {
                                setYearsToWithdraw(values?.float as number);
                            }}
                        />
                    </div>
                    <S.Buttons>
                        <S.RoundButton onClick={() => {setYearsToWithdraw(prevState => (++prevState))}}>+</S.RoundButton>
                        <S.RoundButton onClick={() => {setYearsToWithdraw(prevState => prevState >= 1 ? (--prevState) : 0)}}>-</S.RoundButton>
                    </S.Buttons>
                </S.InputWrapper>
            </div>
            <div>
                <h1>Em {yearsToWithdraw} anos você teria:</h1>
                <S.BigNumber>R$ {calculatedEstimate.toFixed(2)}</S.BigNumber>
                <h2>
                    Valor depositado: {depositedValue.toFixed(2)}
                </h2>
                <h2>
                    Valor total estimado: {calculatedEstimate.toFixed(2)}
                </h2>
            </div>
        </S.Container>
    );
}

export default App;
