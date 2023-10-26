export interface ClearButtonProps {
  expression: string;
  expressionSetter: (setter: string) => void;
  mode: "C" | "CE";
}

export const ClearButton = (props: ClearButtonProps) => {
  const handleButtonClick = () => {
    if (props.mode === "CE") {
      props.expressionSetter(props.expression.slice(0, -1));
    } else {
      props.expressionSetter("");
    }
  };

  return (
    <>
      <button className="button-main" onClick={handleButtonClick}>
        {props.mode}
      </button>
    </>
  );
};
