import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const RangeButtonText=()=>{
    //Number control
  const [set, setSet] = useState(0);
  const data = useSelector((state) => state);
  useEffect(() => {
    setSet(data.set);
  }, [data]);
  
  
    const minRange = set + 1;
    let maxRange = set + 10;
    //Check for no overpass maxSize range
    if (maxRange > data.maxSize) maxRange = data.maxSize;

    return (
      <p style={{ fontSize: "20px", transform: "translateY(60%)", width:"150px" }}>
        {minRange}-{maxRange}/{data.maxSize}
      </p>
    );
}