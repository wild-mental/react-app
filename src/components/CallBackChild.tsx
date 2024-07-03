import React, { useState, ChangeEvent } from 'react';

interface CallBackChildProps {
    sendDataToParent: (data: string) => void;
}

const CallBackChild: React.FC<CallBackChildProps> = ({ sendDataToParent }) => {
    const [childData, setChildData] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChildData(e.target.value);
    };

    const handleClick = () => {
        sendDataToParent(childData);
    };

    return (
        <div>
            <h2>Child Component</h2>
            <input type="text" value={childData} onChange={handleChange} />
            <button onClick={handleClick}>Send Data to Parent</button>
        </div>
    );
};

export default CallBackChild;
