import React from "react";
import styles from "../styles/Home.module.css";

const Chat = () => {
  const [value, setValue] = React.useState("");
  const [prompt, setPrompt] = React.useState("");
  const [completion, setCompletion] = React.useState("");
  const initialPrompt = "Esta é uma conversa com uma Inteligência Artificial chamada LotusAI que ensina programação para iniciantes. A IA é prestativa, inteligente e amigável. Human: ";
  const handleInput = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleKeyDown = React.useCallback(
    async (e) => {
      if (e.key === "Enter") {
        setPrompt(value);
        setCompletion("Loading...");
        const response = await fetch("/api/hello", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: initialPrompt+value }),
        });
        const data = await response.json();
        setValue("");
        setCompletion(data.result.choices[0].text);
      }
    },
    [value]
  );

  return (
    <div className="msnd" /* {styles.main} */>
      <div>Escreva seu prompt (dúvida/ação):</div>
      <input value={value} onChange={handleInput} onKeyDown={handleKeyDown} />
      <div>Prompt: {prompt}</div>
      <div>
        Resposta:{" "}
        <div>
          {completion.split("\n").map((item) => (
            <>
              {item}
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
