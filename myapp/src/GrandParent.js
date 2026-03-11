import Parent from "./Parent";

const GrandParent = (props) => {
  console.log(props);

  return (
    <div className="a">
      <h1>GrandParent Component</h1>
      {props.myWill}
      <Parent a={props.myWill}></Parent>
    </div>
  );
};

export default GrandParent;
