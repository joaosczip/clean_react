import React from "react";
import ReactDOM from "react-dom";
import { PhotoUploadFactory } from "./factories/pages/PhotoUpload";

ReactDOM.render(
  <React.StrictMode>
    <PhotoUploadFactory />
  </React.StrictMode>,
  document.getElementById("root")
);
