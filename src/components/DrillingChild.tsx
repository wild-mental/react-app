import React from 'react';

interface DrillingChildProps {
    name?: string;
}

const DrillingChild: React.FC<DrillingChildProps> = ({ name }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>Hello, {name}!</p>
        </div>
    );
};

export default DrillingChild;