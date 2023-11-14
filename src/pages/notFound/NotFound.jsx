import React from "react";
import styles from "./NotFound.module.scss";
import cs from "classnames/bind";
import { Link } from "react-router-dom";
const cx = cs.bind(styles);

export default function NotFound() {
  return (
    <>
      <div className={cx("wrapper")}>
        <h2>404</h2>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>죄송합니다. 존재하지 않는 페이지입니다.</p>
        <button>
          <Link to="/">홈으로</Link>
        </button>
      </div>
    </>
  );
}
