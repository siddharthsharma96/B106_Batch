import GrandSon from "./GrandSon";

const Son = ({ qw }) => {
  return (
    <div className="a">
      <h1>Son Component</h1>
      {qw}
      <GrandSon myWill={qw}></GrandSon>
    </div>
  );
};

export default Son;
