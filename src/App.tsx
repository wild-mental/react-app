import React, {useState} from 'react';
// import AppHeader from "AppHeader";
import 'App.css';
import styled from 'styled-components';
import ExpenseForm, {ExpenseData} from "./components/ExpenseForm";
import ExpenseItem, {ExpenseItemProps} from "./components/ExpenseItem";
import EventBinderButton from "components/EventBinderButton";
import DrillingParent from "components/DrillingParent";
import CalledBackParent from "./components/CalledBackParent";
import ExpenseList from "./components/ExpenseList";

interface ButtonProps {
    primary?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${(props: ButtonProps) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props: ButtonProps) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  &:hover {
    background-color: ${props => (props.primary ? '#D02090' : 'lightgrey')};
  }
`;

function App() {
    // App 자체에서 지출데이터의 목록을 배열로 관리한다.
    const [expenses, setExpenses] = useState<ExpenseItemProps[]>(
        [
            {
                title: '치킨먹음',
                price: 30000,
                date: new Date(2024, 6 - 1, 3)
            },
            {
                title: '족발먹음',
                price: 40000,
                date: new Date(2023, 12 - 1, 17)
            },
            {
                title: '헬스장등록',
                price: 300000,
                date: new Date(2024, 6 - 1, 12)
            }
        ]
    );
    // add 이벤트 발생 시 데이터의 배열에 맨 첫 항목으로 추가된 지출 내역을 넣는다.
    const addExpenseHandler = (expense: ExpenseItemProps) => {
        setExpenses(prevExpenses => [expense, ...prevExpenses])
        console.log(expenses, expense);
    }
    return (
        <div className="App">
            {/*<AppHeader />*/}
            {/*<StyledButton primary>Primary Button</StyledButton>*/}
            {/*<StyledButton>Default button</StyledButton>*/}
            {/*<br/><hr/>*/}
            {/*<EventBinderButton />*/}
            {/*<hr/>*/}
            {/*<DrillingParent name={"this is to check props drilling"} />*/}
            {/*<hr/>*/}
            {/*<CalledBackParent />*/}
            <ExpenseForm onSaveExpense={addExpenseHandler} />
            <ExpenseList items={expenses} />
        </div>
    );
}

export default App;
