function newGreeting(names) {
  return names.map((name, ind) => {
    return <p key={ind}> Hello,{name}</p>;
  });
}

function Greeting(props) {
  return <div className="GreetingContainer">{newGreeting(props.names)}</div>;
}
export default Greeting;
