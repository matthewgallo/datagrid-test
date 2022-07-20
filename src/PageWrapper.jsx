import React from 'react';
import cx from 'classnames';

const PageWrapper = ({className, children}) => {
  return (
    <div className={cx('page-wrapper', className)}>
      {children}
    </div>
  );
};

export default PageWrapper;