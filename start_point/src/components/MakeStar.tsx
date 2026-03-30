import { useState } from "react";
import { Star } from "../App";

const createArray = (length: number) => [...Array(length)];

export default function StartRating({ toTotalStar = 5 }) {
  const [selectStatr, setSelectStatr] = useState(0);
  return (
    <>
      {createArray(toTotalStar).map((_, i) => (
        <Star
          key={i}
          selected={selectStatr > i}
          onSelect={() => setSelectStatr(i + 1)}
        />
      ))}
      <p>
        {selectStatr} / {toTotalStar}
      </p>
    </>
  );
}
