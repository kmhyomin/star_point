import Color from "./Color";
import useColor from "../Hook/useColor.jsx";

export default function ColorList() {
  const { color } = useColor();
  if (!color.length) return <div>표시할 색이 없습니다.</div>;

  return (
    <div className="color-list">
      {color.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
