import { Fcal } from "fcal";
import Swal from "sweetalert2";
import { BaseButton } from "./BaseButton";

export interface EvaluateExpressionButtonProps {
  expression: string;
  expressionSetter: (setter: string) => void;
}

export const EvaluateExpressionButton = (props: EvaluateExpressionButtonProps) => {
  const handleButtonClick = () => {
    const fcal = new Fcal();
    try {
      const result = fcal.evaluate(props.expression);
      props.expressionSetter(result.toString());
    } catch (err) {
      Swal.fire("Error", "Cannot evaluate expression");
      props.expressionSetter("ERROR");
    }
  };

  return (
    <>
      <BaseButton onclick={handleButtonClick} text="=" />
    </>
  );
};
