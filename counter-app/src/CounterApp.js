import Buttons from "./Buttons";

const CounterApp = ({ val, handleDecrement, handleIncrement }) => {
  return (
    <div className="Counter">
      <p>{val}</p>
      <Buttons
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Buttons>
    </div>
  );
};

export default CounterApp;
