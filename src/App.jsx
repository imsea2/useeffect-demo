import Counter from "./components/Counter";
import Clock from "./components/Clock";
import WidthWatcher from "./components/WidthWatcher";

export default function App() {
    return (
        <div className="wrap">
            <h1> useEffect 연습 🏃‍♀️ </h1>

            <section className="card">
                <h2> 1. Counter + LocalStorage + 문서 제목</h2>
                <Counter />
            </section>

            <section className="card">
                <h2> 2. 타이머 setInterval + cleanup </h2>
                <Clock />
            </section>

            <section className="card">
                <h2>창 너비 감지-이벤트 리스너/cleanup </h2>
                <WidthWatcher />
            </section>
                    </div>
    );
}