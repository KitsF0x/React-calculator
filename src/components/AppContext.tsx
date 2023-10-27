import { useState } from "react";
import { ExpressionDisplay } from "./ExpressionDisplay";
import { ButtonsPanel } from "./ButtonsPanel";

export const AppContext = () => {
  const [expression, setExpression] = useState<string>("");
  return (
    <>
      <ExpressionDisplay expression={expression} />
      <ButtonsPanel expression={expression} expressionSetter={setExpression} />
    </>
  );
};
