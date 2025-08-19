import { useEffect, useState } from "react";

export default function WidthWatcher() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);

    
    return () => window.removeEventListener("resize", onResize);
  }, []); 

  return <div>현재 창 너비: <strong>{width}px</strong></div>;
}
