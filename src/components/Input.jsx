import React, { useState, useContext } from "react";
import CartContext from "./cart-context";

const Input = () => {
  const [data, setData] = useState({
    candyname: "",
    description: "",
    price: "",
  });
  const [validation, setValidation] = useState(true);
  const [dataArray, setDataArray] = useState([]);
  const cartCtx = useContext(CartContext);

  const inpuHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const ShowDAta = (event) => {
    event.preventDefault();

    setValidation(false);
    const newData = { ...data, id: Math.random().toString() };
    // console.log(dataArray)
    setDataArray([...dataArray, newData]);
    setData({
        candyname: "",
        description: "",
        price: "",
    })
  };

  const buyOne = () => {
    console.log(cartCtx.quantity)
  };
  const buyTwo = () => {
    cartCtx.quantity += 2;

  };
  const buyThree = () => {
    cartCtx.quantity += 3;

  };

  return (
    <>
      <div>
        <input
          placeholder="Candy...."
          name="candyname"
          value={data.candyname}
          onChange={inpuHandler}
        ></input>
        <input
          placeholder="Decsription...."
          name="description"
          value={data.description}
          onChange={inpuHandler}
        ></input>
        <input
          placeholder="Price..."
          name="price"
          value={data.price}
          onChange={inpuHandler}
        ></input>
        <button onClick={ShowDAta}>Add</button>
      </div>
      {validation === false
        ? dataArray.map((data) => {
            return (
              <>
                <div key={data.id}>
                  <p>
                    <b>CandyName - </b> {data.candyname}, <b>Description </b> - {data.description}, <b>Price </b> - {data.price}
                  </p>
                  <button onClick={buyOne}>Buy 1</button>
                  <button onClick={buyTwo}>Buy 2</button>
                  <button onClick={buyThree}>Buy 3</button>
                  {/* {console.log(data)} */}
                </div>
              </>
            );
          })
        : <b>Please add the candy data.......</b>}
    </>
  );
};

export default Input;
