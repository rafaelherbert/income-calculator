import './App.css';
import React, { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';
import * as S from './App.style';
import CountUp from 'react-countup';

let previousInitialDeposit = 0;
const cdi: number = 0.0615;

function App() {

    const [initialDeposit, setInitialDeposit] = useState<number>(800);
    const [monthlyDeposit, setMonthlyDeposit] = useState<number>(200);
    const [yearsToWithdraw, setYearsToWithdraw] = useState<number>(3);

    const depositedValue = (initialDeposit + (monthlyDeposit * 12 * yearsToWithdraw));
    const calculatedEstimate = depositedValue * Math.pow(1 + cdi, yearsToWithdraw);

    return (
        <S.Container>
            <S.Left>
                <S.ControllWrapper>
                    <S.InputWrapper>
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
                                setInitialDeposit(values?.float as number ?? 0);
                            }}
                        />
                    </S.InputWrapper>
                    <S.Buttons>
                        <S.RoundButton onClick={() => {setInitialDeposit(prevState => (prevState + 100))}}>+</S.RoundButton>
                        <S.RoundButton onClick={() => {setInitialDeposit(prevState => prevState >= 100 ? (prevState - 100) : 0)}}>-</S.RoundButton>
                    </S.Buttons>
                </S.ControllWrapper>

                <S.ControllWrapper>
                    <S.InputWrapper>
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
                                setMonthlyDeposit(values?.float as number ?? 0);
                            }}
                        />
                    </S.InputWrapper>
                    <S.Buttons>
                        <S.RoundButton onClick={() => {setMonthlyDeposit(prevState => (prevState + 100))}}>+</S.RoundButton>
                        <S.RoundButton onClick={() => {setMonthlyDeposit(prevState => prevState >= 100 ? (prevState - 100) : 0)}}>-</S.RoundButton>
                    </S.Buttons>
                </S.ControllWrapper>

                <S.ControllWrapper>
                    <S.InputWrapper>   
                        <label htmlFor="yearsToWithdraw">
                            Resgate em
                        </label>
                        <CurrencyInput
                            suffix={yearsToWithdraw > 1 ? " anos" : " ano"}
                            id="yearsToWithdraw"
                            name="yearsToWithdraw"
                            placeholder="yearsToWithdraw"
                            defaultValue={yearsToWithdraw}
                            value={yearsToWithdraw}
                            decimalsLimit={2}
                            onValueChange={(value, name, values) => {
                                setYearsToWithdraw(values?.float as number ?? 0);
                            }}
                        />
                    </S.InputWrapper>
                    <S.Buttons>
                        <S.RoundButton onClick={() => {setYearsToWithdraw(prevState => (++prevState))}}>+</S.RoundButton>
                        <S.RoundButton onClick={() => {setYearsToWithdraw(prevState => prevState > 1 ? (--prevState) : 1)}}>-</S.RoundButton>
                    </S.Buttons>
                </S.ControllWrapper>
            </S.Left>
            <S.Right>
                <h1>Em {yearsToWithdraw} {yearsToWithdraw > 1 ? " anos" : " ano"} você teria:</h1>
                <S.BigNumber>
                    <CountUp
                        start={previousInitialDeposit}
                        end={calculatedEstimate}
                        duration={.3}
                        separator=","
                        decimals={2}
                        decimal=","
                        prefix="R$ "
                        onEnd={() => {
                            previousInitialDeposit = calculatedEstimate;
                        }}
                    />
                </S.BigNumber>
                <h2>Valor depositado: R$ {depositedValue.toFixed(2)}</h2>
                <p>O valor total estimado é baseado na taxa CDI (ou taxa DI). É realizado o cálculo de juros compostos considerando esta taxa à 6.15% </p>
            </S.Right>
        </S.Container>
    );
}

export default App;
