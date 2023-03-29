import { FaFreeCodeCamp } from "react-icons/fa";
import { drumPad } from "@component/pages/api/drumPad";

const DrumMachine = () => {
  return (
    <div>
      <div className="flex items-center justify-end text-xl gap-x-2">
        <span className="italic">FCC</span>
        <FaFreeCodeCamp />
      </div>
      <div className="flex">
        <div className="grid grid-cols-3 gap-5">
          {drumPad.map((pad) => (
            <button
              type="button"
              key={pad}
              className="bg-yellow-400 p-4 text-center max-w-[80px] rounded-lg shadow-2xl"
            >
              {pad}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center">
          {/* powaaaa */}
          <>
            <span>power</span>
            <div className="bg-black p-1">
              <button className="bg-blue-700 w-5 h-5 mr-0.5">on</button>
              <button className="bg-blue-700 w-5 h-5 ml-0.5">off</button>
            </div>
          </>
          <>
            <span className="py-1 pl-4 text-center">action goes here</span>
          </>
          <input type={"range"} min={0} max={100} step={1} />
          <>
            <span>bank</span>
            <div className="bg-black p-1">
              <button className="bg-blue-700 w-5 h-5 mr-0.5">on</button>
              <button className="bg-blue-700 w-5 h-5 ml-0.5">off</button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
