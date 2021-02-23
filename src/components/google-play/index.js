import React from 'react';

export default function ({ text }) {
  // TODO: Replace com.your.id with your App id
  const url = 'https://play.google.com/store/apps/details?id=com.your.id';

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
