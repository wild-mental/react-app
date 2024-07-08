import React, { useState } from "react";
import ExpenseItem, {ExpenseItemProps} from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "./UI/Card";
import ExpensesFilter from "./ExpenseFilter";

interface ExpenseListProps {
    items: ExpenseItemProps[];
}

const Expenses:React.FC<ExpenseListProps> = (props) => {
    const [filteredYear, setFilteredYear] = useState("2024");

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem
                    title={props.items[0].title}
                    price={props.items[0].price}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    price={props.items[1].price}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    price={props.items[2].price}
                    date={props.items[2].date}
                />
                {/*<ExpenseItem*/}
                {/*    title={props.items[3].title}*/}
                {/*    price={props.items[3].price}*/}
                {/*    date={props.items[3].date}*/}
                {/*/>*/}
            </Card>
        </div>
    );
};

export default Expenses;