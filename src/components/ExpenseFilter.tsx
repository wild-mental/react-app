import React, {ChangeEvent} from 'react';
import './ExpenseFilter.css';


interface ExpenseFilterProps {
    selected: string;
    onChangeFilter: (selectedYear: string) => void;
}

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ selected, onChangeFilter }) => {
    const changeYearHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedYear = e.target.value;
        // console.log(selectedYear);

        onChangeFilter(selectedYear);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={selected} onChange={changeYearHandler}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;