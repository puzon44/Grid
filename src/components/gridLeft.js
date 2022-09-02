import React from "react";
import Images from "../images/images";

export default function GridLeft() {
  return (
    <>
      <div className="container">
        <div className="container__left">
          <div className="items-1">
            <img src={Images[0].Image1} alt="sds" className="first-child" />
            <div className="image__description">
              <h3 className="number-overlap">#1</h3>
              <p className="text-overlap">
                Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div className="items-2">
            <img src={Images[1].Image2} alt="sds" />
            <div className="image__description">
              <h3 className="number-overlap">#2</h3>
              <p className="text-overlap">
                Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div className="items-3">
            <img src={Images[2].Image3} alt="sds" />
            <div className="image__description">
              <h3 className="number-overlap">#3</h3>
              <p className="text-overlap">
                Lorem, ipsum dolor. 
              </p>
            </div>
          </div>
          <div className="items-4">
            <img src={Images[3].Image4} alt="sds" />
            <div className="image__description">
              <h3 className="number-overlap">#4</h3>
              <p className="text-overlap">
                Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div className="items-5">
            <img src={Images[4].Image5} alt="sds" />
            <div className="image__description">
              <h3 className="number-overlap">#5</h3>
              <p className="text-overlap">
                Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div className="items-6">
            <img src={Images[5].Image6} alt="sds" />
            <div className="image__description">
              <h3 className="number-overlap">#6</h3>
              <p className="text-overlap">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className="container__right"></div>
      </div>
    </>
  );
}
