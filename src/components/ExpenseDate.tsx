import React from 'react';
import './ExpenseDate.css';
// Prop 타입 정의
interface ExpenseDateProps {
    exDate: Date;
}

const ExpenseDate: React.FC<ExpenseDateProps> = ({ exDate: date }) => {

    // console.log('bbb: ', bbb.exDate);
    const month = date.toLocaleString('en-US', {month: 'long'});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{date.getFullYear()}</div>
            <div className="expense-date__year">{month}</div>
            <div className="expense-date__day">{date.getDate()}</div>
        </div>
    );
};

export default ExpenseDate;
