interface BaseButtonProps {
  text: string;
  onclick: () => void;
}

export const BaseButton = (props: BaseButtonProps) => {
  return (
    <button className="button-main" onClick={props.onclick}>
      {props.text}
    </button>
  );
};
