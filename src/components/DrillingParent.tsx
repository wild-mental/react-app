import React from 'react';
import DrillingChild from 'components/DrillingChild';

interface DrillingParentProps {
    name: string;
}

const DrillingParent: React.FC<DrillingParentProps> = ({ name }) => {
    return (
        <div>
            <h1>Parent Component</h1>
            <DrillingChild name={name} />
        </div>
    );
};

export default DrillingParent;