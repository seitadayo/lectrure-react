import React from "react";
//htmlの中に仮想DOMを生成するために必要なコード
import ReactDom from "react-dom";
import App from "./App";
//画面に反映するため
ReactDom.render(<App />, document.getElementById("root"));
