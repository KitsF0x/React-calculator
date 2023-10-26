import { AppendButton } from "./AppendButton";
import { ClearButton } from "./ClearButton";
import { EvaluateExpressionButton } from "./EvaluateExpressionButton";

export interface ButtonsPanelProps {
  expression: string;
  expressionSetter: (setter: string) => void;
}

export const ButtonsPanel = (props: ButtonsPanelProps) => {
  return (
    <>
      <div>
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="7" text="7" />
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="8" text="8" />
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="9" text="9" />
      </div>
      <div>
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="4" text="4" />
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="5" text="5" />
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="6" text="6" />
      </div>
      <div>
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="1" text="1" />
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="2" text="2" />
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="3" text="3" />
      </div>
      <div>
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="+" text="+" />
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="-" text="-" />
        <AppendButton expression={props.expression} expressionSetter={props.expressionSetter} toAppend="*" text="*" />
      </div>
      <div>
        <ClearButton expression={props.expression} expressionSetter={props.expressionSetter} mode="C" />
        <ClearButton expression={props.expression} expressionSetter={props.expressionSetter} mode="CE" />
        <EvaluateExpressionButton expression={props.expression} expressionSetter={props.expressionSetter} />
      </div>
    </>
  );
};
