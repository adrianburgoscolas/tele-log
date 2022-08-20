import { Dispatch, SetStateAction, useState } from "react";
interface BurgerProps {
  scale: number, 
  background: string,
  color: string,
  visibility: string,
}
export default function Burger({scale, background, color, visibility}: BurgerProps) {
  const [active, setActive]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);
  return (
    <div className="box" onClick={_ => setActive(!active)}>
      <div className="stick animation1"></div>
      <div className="stick animation2"></div>
      <div className="stick animation3"></div>
      <style jsx>{`
        .animation1 {
          transform-origin: center;
          transform: translate(0, ${active?scale * 0.33:0}rem) rotate(${active?45:0}deg);
          transition: all 300ms;
        }


        .animation2 {
          opacity: ${active?0:1};
          transition: all 300ms;
        }

        .animation3 {
          transform-origin: center;
          transform: translate(0, -${active?scale * 0.33:0}rem) rotate(-${active?45:0}deg);
          transition: all 300ms;
        }
        .stick {
          background-color: ${color};
          width: 100%;
          height: ${scale * 0.15}rem;
          border-radius: ${scale * 0.15}rem;
        }
        .box {
          visibility: ${visibility};
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: ${scale}rem;
          height: ${scale}rem;
          background-color: ${background};
          transition: all 300ms;
        }
      `}</style> 
    </div>
  );
}
