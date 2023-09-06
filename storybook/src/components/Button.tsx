import cx from 'classnames';

import './button.scss'

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum ButtonColor {
  PRIMARY = 'primary',
  DARK = 'dark',
  LIGHT = 'light'
}

function Button(props:{ size?: ButtonSize; color?: ButtonColor; children: React.ReactNode }) {
  const cls = cx(
    `btn-${props.size || ButtonSize.MEDIUM}`,
    `btn-${props.color || ButtonColor.LIGHT}`,
  );

  return <button className={cx('button', cls)} type='button'>{props.children}</button>
}

export default Button;