import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

type propTypes = {end: number, decimals: number}

const Counter = ({ end, decimals }: propTypes) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={1}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className="counter"
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
