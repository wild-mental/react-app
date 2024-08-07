import React, {ChangeEvent, useState} from 'react';
import './ExpenseItem.css';
// import {ExpenseData} from "./ExpenseForm";
import Card from './UI/Card';
import ExpenseDate from "./ExpenseDate";

export interface ExpenseItemProps {
    title: string;
    price: number;
    date: Date;
}

const ExpenseItem: React.FC<ExpenseItemProps>= ({ title, price, date }) => {
    // let itemTitle = title;

    // useState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
    /*
      - useState훅의 리턴값은 배열이며
      - 첫번째 요소는 관리할 상태값의 초기값
      - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
    */
    const [itemTitle, setItemTitle] = useState(title);
    // console.log('abc: ',abc);

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

    return (
        <Card className="expense-item">
            <ExpenseDate exDate={new Date(date)} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{formattedPrice}원</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
