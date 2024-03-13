import React from 'react';

export default function ({ text }) {
  const url = 'https://play.google.com/store/apps/details?id=com.mffais.app';

  if (text) {
    return (
      <a className="button" target="_blank" href={ url }>
        {text}
      </a>
    );
  }

  return (
    <a target="_blank" href={ url }>
      <img src="/img/google-play.png" className="google-play" />
    </a>
  );
}
