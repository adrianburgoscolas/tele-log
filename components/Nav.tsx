import Link from "next/link";
import Burger from "./Burger";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/utils.module.css";
import { palette, SCALE } from "../utils/vars"



export default function Nav() {
  const [side, setSide]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  return (
    <div className="nav">
      <Burger active={side} scale={SCALE} visibility={"visible"} color={palette.LIGHT_PRIMARY_COLOR} background={palette.DARK_PRIMARY_COLOR} setSide={setSide} />
      <div className="side-box">
        <ul className={`side ${styles.textxl}`} >
          <li onClick={_ => setSide(side => !side)}>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li onClick={_ => setSide(side => !side)}>
            <Link href="/dashboard"><a>Dashboard</a></Link>
          </li>
          <li onClick={_ => setSide(side => !side)}>
            <Link href="/about"><a>About</a></Link>
          </li>
          <li onClick={_ => setSide(side => !side)}>
            <Link href="/login"><a>Login</a></Link>
          </li>
        </ul>
        <div className="pad"></div>
      </div>
      <style jsx>{`
        .nav {
          position: relative;
          background-color: ${palette.DARK_PRIMARY_COLOR};
          box-shadow: 0px 4px 6px -1px rgba(48, 63, 159, 0.21), 0px 10px 14px -2px rgba(48, 63, 159, 0.31);
          z-index: 20;
        }
        .side {
          display: block;
          background-color: ${palette.DEFAULT_PRIMARY_COLOR};
          color: ${palette.TEXT_PRIMARY_COLOR}; 
          margin: 0; 
          padding: 1rem;
          width: 70vw;
          height: calc(100vh - ${SCALE}rem);
        }

        .side-box a {
          color: inherit;
          text-decoration: none;
          transition: all 300ms;
        }

        .side-box a:hover,
        .side-box a:active,
        .side-box a:focus {
          color: ${palette.LIGHT_PRIMARY_COLOR};
        }

        .side-box {
          z-index: 1;
          display: flex;
          position: absolute;
          left: 0;
          width: 100vw;
          transform: translate(${side?"0":"-100vw"}, 0);
          transition: all 300ms;
        }
        .pad {
          background-color: ${palette.LIGHT_PRIMARY_COLOR};
          opacity: 0.5;
          flex: 1 1 auto;
        }
        .side li {
          list-style: none;
        }
      `}</style>
    </div>
  );
}
