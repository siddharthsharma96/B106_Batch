const Component2 = ({ as, aa }) => {
  console.log(as);

  return (
    <div>
      {as}
      <h2>Another Component</h2>
      <h3>No of students in our course are {aa}</h3>
    </div>
  );
};

export default Component2;

export const Component5 = () => {
  return (
    <div>
      <h5>Another Component 56</h5>
    </div>
  );
};

export const Component6 = () => {
  return (
    <div>
      <h5>Another Component 34</h5>
    </div>
  );
};
