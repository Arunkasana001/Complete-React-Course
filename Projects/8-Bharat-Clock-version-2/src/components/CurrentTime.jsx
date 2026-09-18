import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("Interval has been setup");

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // This is the cleanUp function
    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the interval");
    };
  }, []);

  // let time = new Date();
  return (
    <h3>
      This is the Curretnt time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </h3>
  );
};
export default CurrentTime;
