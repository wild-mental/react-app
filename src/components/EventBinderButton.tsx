import React from "react";


// 함수 외부에 선언한 이벤트 핸들러
const handleClickEx = () => {
    console.log('Button is clicked!(함수 외부에 핸들러 선언)');
};

function EventBinderButton() {
    // 함수 내부에 선언한 이벤트 핸들러습
    const handleClickIn = () => {
        console.log('Button is clicked!(함부 내부에 핸들러 선언)');
    };

    return (
        // 인라인 핸들러 선언
        <button onClick={() => console.log('Button is clicked!(인라인 핸들러 선언)')}>
        {/*<button onClick={handleClickEx}>*/}
        {/*<button onClick={handleClickIn}>*/}
            이벤트가 바인딩된 버튼!
        </button>
    );
}

export default EventBinderButton;