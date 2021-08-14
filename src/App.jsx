/*eslint react-hooks/exhaustive-deps : off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
//１点補足として、コンポーネント名は必ず先頭を大文字から初めるようにしてください。
//_みたいなアンダーバーは推奨されない
//○SomeComponent ×someComponent Some_component
/**
 * 再レンダリングする条件は
 * ①stateの状態が変更されたとき
 * ②propsの中身が変更されたとき
 * ③親の要素が変更されたとき子供も再レンダリングされる
 */
//再レンダリングが起きまくる場合にはsetStateに気を付ける
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  //useEffectで空の配列を使えば最初の一回だけしか処理が実行されなくなる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      {/**
       *jsの要素は波括弧で括る{} これはreturnの中のhtmlっぽいところだけ
       */}
      <h1 style={{ color: "red" }}>こんにちは</h1>

      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

//appっていう関数を他のファイルでも使えるようにしている
export default App;
