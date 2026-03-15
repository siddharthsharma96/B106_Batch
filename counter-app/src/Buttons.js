import Button from "./Button";

const Buttons = ({ handleDecrement, handleIncrement }) => {
  return (
    <div className="btnContainer">
      <Button func={handleIncrement} txt={"Increment"}></Button>
      <Button func={handleDecrement} txt={"Decrement"}></Button>
    </div>
  );
};

export default Buttons;
