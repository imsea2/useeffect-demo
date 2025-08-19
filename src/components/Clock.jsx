import { useEffect, useState } from "react";

export default function Clock() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(id);
    }, []);

      return <div className="time">{now.toLocaleTimeString()}</div>;
}

