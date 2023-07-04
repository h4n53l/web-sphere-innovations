import { useState, Fragment, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";
import useClickOutside from "../utilities/useClickOutside"




const NiceSelect = ({ value, extraClass, disable }: any) => {
      const [toggle, setToggle] = useState(false);
      const [activeValue, setActiveValue] = useState(disable ? disable : value[0]);

      
    let domNode: any = useClickOutside(() => {
      setToggle(false);
    });
    
    return (
        <Fragment>
        <div
          className={`nice-select ${toggle ? "open" : ""} ${
            extraClass ? extraClass : ""
          }`}
          onClick={() => setToggle(!toggle)}
          ref={domNode}
        >
          <span className="current">{activeValue}</span>
          <ul className="list">
            {disable && <li className="option disabled">{disable}</li>}
            {value &&
              value.map((v: any, i: any) => (
                <li
                  data-value={v}
                  className="option"
                  key={i}
                  onClick={() => setActiveValue(v)}
                >
                  {v}
                </li>
              ))}
          </ul>
        </div>
      </Fragment>
    );
}

export default NiceSelect;