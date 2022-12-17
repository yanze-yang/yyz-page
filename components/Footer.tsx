import React from "react";

import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <ul className={style.list}>
        <li className={style.item}>
          <a className={style.link} href="https://www.behance.net/yanze">
            Behance
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="https://github.com/yanze-yang">
            Github
          </a>
        </li>
        <li className={style.item}>
          <p className={style.wave}>👋</p>
        </li>
      </ul>
    </div>
  );
}
