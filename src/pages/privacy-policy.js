import React, { useState, useEffect } from 'react';
import style from '../components/privacy-and-terms/PrivacyAndTerms.module.scss';

export default function () {
  // const [ privacyPolicy, setPrivacyPolicy ] = useState([]);

  // const getData = (url) => {
  //   fetch(`/data/${ url }.json`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   }).then(async (response) => {
  //     setPrivacyPolicy(await response.json());
  //   });
  // };

  //   useEffect(() => {
  //     getData('privacy-policy', setPrivacyPolicy);
  //   }, []);
  return 'hey test 3'

  // return (
  //   <>
  //     <section className={ style.header }>
  //       <h2>Mffais Privacy Policy TEST2</h2>
  //     </section>
  //     <section className={ style.content }>
  //       {privacyPolicy.map((group, groupIndex) => (
  //         <div key={ `group${ groupIndex }` }>
  //           <p className={ style.title }>{group.title}</p>
  //           {group.text.map((text, index) => (
  //             <p key={ `text${ groupIndex }-${ index }` }>{text}</p>
  //           ))}
  //         </div>
  //       ))}
  //     </section>
  //   </>
  // );
}
