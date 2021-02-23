import React, { useEffect, useState } from 'react';
import style from './PrivacyAndTerms.module.scss';

export default function ({ url, title }) {
  const [ data, setData ] = useState([]);

  const getData = () => {
    fetch(`/data/${ url }`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(async (response) => {
      setData(await response.json());
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className={ style.header }>
        <h2>{title}</h2>
      </section>
      <section className={ style.content }>
        {data.map((group, groupIndex) => (
          <div key={ `group${ groupIndex }` }>
            <p className={ style.title }>{group.title}</p>
            {group.text.map((text, index) => (
              <p key={ `text${ groupIndex }-${ index }` }>{text}</p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
