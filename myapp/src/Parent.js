import Son from "./Son";
const Parent = ({ a }) => {
  return (
    <div className="a">
      <h1>Parent Component</h1>
      {a}
      <Son qw={a}></Son>
    </div>
  );
};

export default Parent;
