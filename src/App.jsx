import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [result, setresult] = useState("");
  console.log(typeof result)

  // useEffect(()=>{
  //   setresult((prev) => String(prev));

  // },[result])


  return (

    <div className="w-full h-screen flex justify-center items-center font-semibold">
      <div className="w-[90%] sm:w-[450px] mt-10 bg-blue-950 rounded-xl ">
        <div className="w-5/6 m-3 mx-auto mt-10 bg-slate-900 text-white rounded-md ">
          <h2 className="w-full p-4 text-2xl text-end">
            {" "}
            {result === "" ? "0" : result}
          </h2>
        </div>
        <div className="w-4/5 flex justify-between mx-auto">
          <input
            className="w-1/6 bg-slate-400 py-4 m-2 text-lg "
            type="button"
            value={1}
            onClick={() => {
              setresult((prev) => (prev += "1"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4  m-2 "
            type="button"
            value={2}
            onClick={() => {
              setresult((prev) => (prev += "2"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4  m-2"
            type="button"
            value={3}
            onClick={() => {
              setresult((prev) => (prev += "3"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4 m-2 text-lg "
            type="button"
            value={"⇐"}
            onClick={() => {
              if(typeof result == "string"){
                setresult((prev) => prev.substring(0, prev.length - 1));
              }else{
                setresult("");
              }
            }}
          />
        </div>
        <div className="w-4/5 flex justify-between mx-auto">
          <input
            className="w-1/6 bg-slate-400 py-4 m-2 text-lg "
            type="button"
            value={4}
            onClick={() => {
              setresult((prev) => (prev += "4"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4  m-2 "
            type="button"
            value={5}
            onClick={() => {
              setresult((prev) => (prev += "5"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4  m-2"
            type="button"
            value={6}
            onClick={() => {
              setresult((prev) => (prev += "6"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4 m-2 text-lg "
            type="button"
            value={"-"}
            onClick={() => {
                setresult((prev) => (prev += "-"));
            }}
          />
        </div>
        <div className="w-4/5 flex justify-between mx-auto">
          <input
            className="w-1/6 bg-slate-400 py-4 m-2 text-lg "
            type="button"
            value={7}
            onClick={() => {
              setresult((prev) => (prev += "7"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4  m-2 "
            type="button"
            value={8}
            onClick={() => {
              setresult((prev) => (prev += "8"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4  m-2"
            type="button"
            value={9}
            onClick={() => {
              setresult((prev) => (prev += "9"));
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4 m-2 text-lg "
            type="button"
            value={"*"}
            onClick={() => {
                setresult((prev) => (prev += "*"));
            }}
          />
        </div>
        <div className="w-4/5 flex justify-between mx-auto mb-10">
          <input
            className="w-1/6 bg-slate-400 py-4 m-2 text-lg "
            type="button"
            value={0}
          />
          <input
            className="w-1/6 bg-slate-400 py-4  m-2 "
            type="button"
            value={"="}
            onClick={()=>{
              setresult(eval(result))
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4  m-2"
            type="button"
            value={"/"}
            onClick={() => {
                setresult((prev) => (prev += "/"));
              
            }}
          />
          <input
            className="w-1/6 bg-slate-400 py-4 m-2 text-lg "
            type="button"
            value={"+"}
            onClick={() => {
              setresult((prev) => (prev += "+"))
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
