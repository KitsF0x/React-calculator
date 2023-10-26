import { BaseButton } from "./BaseButton";

export interface AppendButtonProps {
  expression: string;
  expressionSetter: (setter: string) => void;
  toAppend: string;
  text: string;
}

export const AppendButton = (props: AppendButtonProps) => {
  const handleButtonClick = () => {
    props.expressionSetter(props.expression + props.toAppend);
  };

  return (
    <>
      <BaseButton onclick={handleButtonClick} text={props.text} />
    </>
  );
};
