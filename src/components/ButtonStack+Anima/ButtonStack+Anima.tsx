import React from "react";
import './ButtonStack+Anima.css'

function ButtonStack(props: any) {
  const { spanText1, spanText2, spanText3 } = props;
  return (
    <div className="button-stack">
      <div className="buttons-default">
        <div className="button-label valign-text-middle librefranklin-semi-bold-white-17px">
          <span>
            <span className="librefranklin-semi-bold-white-17px">
              {spanText1}
            </span>
          </span>
        </div>
      </div>
      <div className="buttons-default-1">
        <div className="button-label-1 librefranklin-semi-bold-cerulean-blue-17px">
          <span className="librefranklin-semi-bold-cerulean-blue-17px">
            {spanText2}
          </span>
        </div>
      </div>
      <div className="button-label-2 librefranklin-semi-bold-cerulean-blue-17px">
        <span className="librefranklin-semi-bold-cerulean-blue-17px">
          {spanText3}
        </span>
      </div>
    </div>
  );
}

export default ButtonStack;
