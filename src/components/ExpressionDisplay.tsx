export interface ExpressionDisplayProps {
  expression: string;
}

export const ExpressionDisplay = (props: ExpressionDisplayProps) => {
  return (
    <>
      <h2>{props.expression}</h2>
    </>
  );
};
