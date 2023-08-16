import React from "react";

function App() {
  let curtime = new Date().toLocaleTimeString("en-GB");

  const [time, setTime] = React.useState(curtime);

  function update() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }
  setInterval(update, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
