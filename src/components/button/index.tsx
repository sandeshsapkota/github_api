import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  className?: string
  onClick?: () => void
  href?: string
  loading?: boolean
  type?: 'submit' | 'reset' | 'button'
}

const PrimaryButton: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  /**
     * COMPONENT PROPS
     */
  const {
    children, onClick, href, loading, className, type,
  } = props || {};

  const classnames = classNames(
    'flex select-none items-center gap-2 rounded-full py-2  px-4 text-center align-middle font-sans text-xs font-bold capitalize text-white transition-all bg-black hover:bg-black/80 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
    className,
  );

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <Link to={href} className={classnames}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleOnClick}
      className={classnames}
      type={type || 'button'}
    >
      {children}
      {loading ? <div className="loader" /> : ''}
    </button>
  );
};

export default PrimaryButton;
