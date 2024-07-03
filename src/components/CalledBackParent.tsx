import React, { useState } from 'react';
import Child from './CallBackChild';

const CalledBackParent: React.FC = () => {
    const [parentData, setParentData] = useState<string>('');

    const handleDataFromChild = (data: string) => {
        setParentData(data);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Data from Child: {parentData}</p>
            <Child sendDataToParent={handleDataFromChild} />
        </div>
    );
};

export default CalledBackParent;
