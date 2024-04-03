import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  type?: "primary" | "secondary" | "transparent"
};

const Button = (props: IButtonProps) => {
  const btnClass = className([
    "btn btn-base",
    props?.xl === true ? "btn-xl" : "",
    !props.type ? "btn-primary" :"",
    props.type === "primary" ? "btn-primary" : "",
    props.type === "secondary" ? "btn-secondary" : "",
    props.type === "transparent" ? "btn-transparent" : "",
  ]);

  return (
    <div className={btnClass}>
      {props.children}
    </div>
  );
};

export { Button };
