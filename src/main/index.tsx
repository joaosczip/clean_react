import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "../presentation/styles/global";
import { PhotoUploadFactory } from "./factories/pages/PhotoUpload";

ReactDOM.render(
  <React.StrictMode>
    <PhotoUploadFactory />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
