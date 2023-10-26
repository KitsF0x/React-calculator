import { useState } from "react";
import { ExpressionDisplay } from "./components/ExpressionDisplay";
import { ButtonsPanel } from "./components/ButtonsPanel";

function App() {
  const [expression, setExpression] = useState<string>("");

  return (
    <>
      <ExpressionDisplay expression={expression} />
      <ButtonsPanel expression={expression} expressionSetter={setExpression} />
    </>
  );
}

export default App;
