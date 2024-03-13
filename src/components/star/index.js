import React from 'react';

export default function ({ className }) {
  return (
    <div className={ className }>
      <img src="/img/star.svg" style={ !!className ? { width: '100%' }: {} } />
    </div>
  );
}
