import { Dispatch, SetStateAction } from "react";
interface BurgerProps {
  active: boolean,
  scale: number, 
  background: string,
  color: string,
  visibility: string,
  setSide: Dispatch<SetStateAction<boolean>>,
}
export default function Burger({active, scale, background, color, visibility, setSide}: BurgerProps) {
  return (
    <div className="box" onClick={_ => setSide((side) => !side)}>
      <div className="stick animation1"></div>
      <div className="stick animation2"></div>
      <div className="stick animation3"></div>
      <style jsx>{`
        .animation1 {
          transform-origin: center;
          transform: translate(0, ${active?scale * 0.3:0}rem) rotate(${active?45:0}deg);
          transition: all 300ms;
        }


        .animation2 {
          opacity: ${active?0:1};
          transition: all 300ms;
        }

        .animation3 {
          transform-origin: center;
          transform: translate(0, -${active?scale * 0.3:0}rem) rotate(-${active?45:0}deg);
          transition: all 300ms;
        }
        .stick {
          background-color: ${color};
          width: 100%;
          height: ${scale * 0.1}rem;
          border-radius: ${scale * 0.15}rem;
        }
        .box {
          visibility: ${visibility};
          margin: 0;
          padding: ${scale * 0.05}rem;
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
