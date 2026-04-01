import useInput from "../Hook/useInput.tsx";

export default function AddColorForm({ onNewColors }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    if (!onNewColors) return;
    onNewColors(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <>
      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder="색 제목..." required />
        <input {...colorProps} type="color" required />
        <button>ADD</button>
      </form>
    </>
  );
}
