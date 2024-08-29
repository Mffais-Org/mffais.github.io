import React from "react";
import style from "./PrivacyAndTerms.module.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ data, title }) {
  return (
    <>
      <section className={style.header}>
        <h2>{title}</h2>
      </section>
      <section className={style.content}>
        {data.map((group, groupIndex) => (
          <div key={`group${groupIndex}`}>
            <p className={style.title}>{group.title}</p>
            {group.text.map((text, index) => (
              <p key={`text${groupIndex}-${index}`}>{text}</p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
