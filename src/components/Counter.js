import { useRef, useState } from "react";

export const Counter = () => {
  const [charLength, setCharLength] = useState(0);
  const [wordLength, setWordLength] = useState(0);

  const textRef = useRef();

  const handleCount = () => {
    const value = textRef.current.value;
    setCharLength(value.length);
    value.length
      ? setWordLength(value.trim().split(" ").length)
      : setWordLength(0);
  };

  const handleButton = () => {
    textRef.current.value = "";
    handleCount();
  };

  return (
    <section className="counter">
      <textarea
        onChange={handleCount}
        ref={textRef}
        className="textArea"
        placeholder="Get Started Here & Type or paste your text"
      ></textarea>

      <button
        onClick={handleButton}
        className="clearBtn"
        disabled={charLength ? "" : "disabled"}
      >
        Clear
      </button>

      <p className="result">
        <span className="charLength">Character: {charLength}</span>
        <span className="wordLength">Word: {wordLength}</span>
      </p>
    </section>
  );
};
