const Component1 = (props) => {
  console.log(props);

  return (
    <>
      <h1>My First Component</h1>
      <h2>My heading 2</h2>
      {props.asas}
      {props.we}
    </>
  );
};

export default Component1;
