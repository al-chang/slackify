import React, { useEffect, useState } from "react";
import "./App.css";
import ImageUpload from "./components/ImageUpload";
import init from "hello-wasm";

function App() {
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    const initWasm = async () => {
      await init();
      setWasmLoaded(true);
    };

    initWasm();
  }, []);

  if (!wasmLoaded) {
    return <>Loading</>;
  }

  return (
    <>
      <ImageUpload />
      <br />
    </>
  );
}

export default App;
