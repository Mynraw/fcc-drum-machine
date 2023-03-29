import { FaFreeCodeCamp } from "react-icons/fa";
import { drumPad } from "@component/pages/api/drumPad";

const DrumMachine = () => {
  return (
    <div className="max-w-xl border-2 border-orange-500 p-1">
      <div className="flex items-center justify-end gap-x-2">
        <span className="italic">FCC</span>
        <FaFreeCodeCamp />
      </div>
      <div className="flex items-center gap-x-5">
        <div className="grid grid-cols-3 gap-2">
          {drumPad.map((pad) => (
            <button
              type="button"
              key={pad}
              className="bg-gray-500 p-4 text-center max-w-[90px] rounded-lg shadow-md shadow-black"
            >
              {pad}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center">
          {/* powaaaa */}
          <>
            <span className="capitalize">power</span>
            <div className="bg-black p-1 flex items-center">
              <button className="bg-blue-700 w-5 h-5 mr-0.5">on</button>
              <button className="bg-blue-700 w-5 h-5 ml-0.5">off</button>
            </div>
          </>
          <>
            <span className="py-2 px-6 text-lg capitalize bg-black text-white">
              action goes here
            </span>
          </>
          <input type={"range"} min={0} max={100} step={1} />
          <>
            <span>bank</span>
            <div className="bg-black p-1 flex items-center">
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
