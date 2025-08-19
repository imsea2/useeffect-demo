import {useEffect, useState} from "react";

const LS_KEY = "demo-count"

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem(LS_KEY);
        if (saved !== null) {
            setCount(Number(saved));
        }
    }, []);

    useEffect(() => {
        document.title = `카운트: ${count}`
    }, [count]);

    return (
        <div>
            <p>현재 값 : <strong>{count}</strong></p>
            <div className="row">
                <button onClick={() => setCount((c) => c-1)}>-1</button>
                <button onClick={() => setCount((c) => c+1)}>+1</button>
                <button onClick={() => setCount(0)}>초기화</button>
            </div>
            <small className="hint">
                💾 값은 로컬 스토리지에 저장됨
            </small>
        </div>
    );  
}