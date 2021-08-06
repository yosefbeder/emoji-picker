import React from 'react';
import classes from '../../../styles/tooltip.module.css';

const withTooltip = <T extends {}>(
  Component: React.FC<T>,
  containerClassName?: string,
) => {
  const NewComponent: React.FC<T & { title: string }> = props => {
    const { title, ...componentsProps } = props;

    return (
      <div
        className={`${containerClassName ? containerClassName : ''} ${
          classes.container
        }`}
      >
        <Component {...(componentsProps as T)} className={classes.element} />
        <div className={classes.text}>{title}</div>
      </div>
    );
  };

  return NewComponent;
};

export default withTooltip;
