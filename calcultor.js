import React, { useState } from "react";
import "./cal.css";

const Cal = () => {
    const [data, setData] = useState("");
    const [res, setRes] = useState(0);

    const change = (e) => {
        setData(e.target.value);
    };

    const desc = () => {
        let r = data % 10;
        setData(data.slice(0, -1));
    };

    const calculateResult = () => {
        try {
            setRes(eval(data));
        } catch (error) {
            setRes("Error");
        }
    };

    return (
        <div className="d">
            <input type="text" value={data} onChange={change} id="input" />
            <br />
            <br />
            <button onClick={calculateResult} className="btn btn-danger">ENTER</button>
            <h3>Result - {res}</h3>
            <div className="body">
                <button onClick={() => setData("")}>AC</button>&nbsp;&nbsp;
                <button onClick={desc}>D</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "%")}>%</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "/")}>/</button>
            </div>&nbsp;
            <div className="body">
                <button onClick={() => setData(data + "7")}>7</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "8")}>8</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "9")}>9</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "*")}>x</button>
            </div>&nbsp;
            <div className="body">
                <button onClick={() => setData(data + "4")}>4</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "5")}>5</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "6")}>6</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "-")}>-</button>
            </div>&nbsp;
            <div className="body">
                <button onClick={() => setData(data + "1")}>1</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "2")}>2</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "3")}>3</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "+")}>+</button>
            </div>&nbsp;
            <div className="body">
                <button onClick={() => setData(data + "00")}>00</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + "0")}>0</button>&nbsp;&nbsp;
                <button onClick={() => setData(data + ".")}>.</button>&nbsp;&nbsp;
                <button onClick={calculateResult}>=</button>
            </div>&nbsp;
        </div>
    );
};

export default Cal;
