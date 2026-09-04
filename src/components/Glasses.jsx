import React, { useState } from "react";
import glassesData from "../dataGlasses.json";

export default function Glasses() {
  const [selectedGlasses, setSelectedGlasses] = useState(glassesData[0]);

  return (
    <div className="container text-center ">

      {/* MODEL */}
      <div
        className="position-relative d-inline-block"
        style={{ width: "240px"  }}
      >
        <img
          src="/glassesImage/model.jpg"
          alt="model"
          className="img-fluid"
        />
        
        <img
          src={selectedGlasses.url.replace("./", "/")}
          alt="selected glasses"
          className="position-absolute"
          style={{
            width: "110px",
            top: "75px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: "0.5",
          }}
        />
        
      </div>
      <div
        className="position-relative d-inline-block"
        style={{ width: "240px" }}
      >
        <img
          src="/glassesImage/model.jpg"
          alt="model"
          className="img-fluid"
        />
        
      </div>

      <div className="bg-white row justify-content-center mt-5 ">
        {glassesData.map((glasses) => (
          <div className="col-4 col-md-2 mb-3" key={glasses.id}>
            <img
              src={glasses.url.replace("./", "/")}
              alt="glasses"
              className="img-fluid"
              style={{
                width: "120px",
                cursor: "pointer",
                padding: "5px",
              }}
              onClick={() => setSelectedGlasses(glasses)}
            />
          </div>
        ))}
      </div>

    </div>
  );
}