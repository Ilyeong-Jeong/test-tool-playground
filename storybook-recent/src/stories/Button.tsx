import './button.scss';

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonColor {
  PRIMARY = 'primary',
  DARK = 'dark',
  LIGHT = 'light',
}

function Button(props: {
  size?: ButtonSize;
  color?: ButtonColor;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`button btn-${props.size || ButtonSize.MEDIUM} btn-${
        props.color || ButtonColor.LIGHT
      }`}
      type="button"
    >
      {props.children}
    </button>
  );
}

export default Button;
