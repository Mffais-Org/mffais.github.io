import React from 'react';

export default function ({ text }) {
  const url = 'https://apps.apple.com/hr/app/mffais/id1574144672';

  if (text) {
    return (
      <a className="button" target="_blank" href={ url }>
        {text}
      </a>
    );
  }

  return (
    <a target="_blank" href={ url }>
      <img src="/img/app-store.png" className="app-store" />
    </a>
  );
}
