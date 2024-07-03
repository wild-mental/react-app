import React, {ChangeEvent, FormEvent, useState} from "react";

interface ExpenseFormProps {
    // 외부에서 Form 을 정의할 때, save 동작을 props 에 담아서 수신하는 구조
    onSaveExpense: (expense: ExpenseData) => void;
}

// 외부에서 Form 을 정의할 때, save 동작을
// 각 context 에 맞추어서 ExpenseFormProps 타입으로 할당 가능
const ExpenseForm: React.FC<ExpenseFormProps> =
    (
        // 매개변수 분해 구문을 통해 props 로부터 onSaveExpense 이벤트 핸들러만 발라내어 수신
        { onSaveExpense }
    ) =>
    {
        // 객체형 상태값을 사용해 여러 개의 input 필드에서 발생하는 데이터를
        // ChangeEvent<HTMLInputElement> 라는 한 종류의 이벤트로 일괄 처리
        const [userInput, setUserInput] = useState(
            {title: '', price: 0, date: ''}
        );

        const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setUserInput(
                // HTML 로부터 Input 필드의 변경을 감지하고
                // 변경된 필드 외의 다른 변수들은 그대로 둔 채 특정 필드만 업데이트하는 구조
                (prevState) => (
                    {
                        ...prevState,
                        // 필드가 업데이트 되었을 때 해당 필드만 변경하고
                        // 기존 상태값은 '...' 분해 구문으로 처리
                        [name]: value
                    }
                )
            );
        };

        const submitHandler = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            // 아래 내용은 state 가 변경된 것을 그대로 데이터에 반영해줌
            // 업데이트 되며 관리되고 있던 state 값을 다시 후속 동작의 input 데이터로 사용하는 패턴
            const expense: ExpenseData = {
                title: userInput.title,
                price: userInput.price,
                date: userInput.date,
            };

            // ExpenseForm 컴포넌트가 외부에서 수신하는 함수 props 를 그대로 호출
            onSaveExpense(expense);
        };

        return (
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={userInput.title}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={userInput.price}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={userInput.date}
                        onChange={inputChangeHandler}
                    />
                </div>
                <button type="submit">지출내역 등록</button>
            </form>
        )
    }

export default ExpenseForm;
export interface ExpenseData {
    title: string;
    price: number;
    date: string;
}
