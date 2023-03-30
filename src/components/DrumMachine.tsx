import Link from "next/link";
import PowerButton from "@component/assets/PowerButton";
import DrumPad from "@component/assets/DrumPad";
import FccNav from "@component/assets/FccNav";
import ActionLabel from "@component/assets/ActionLabel";
import RangeBar from "@component/assets/RangeBar";

const DrumMachine = () => {
  return (
    <div className="grid place-items-center  w-screen h-screen bg-black">
      <div className="max-w-xl border-2 border-[#245953] rounded-lg px-7 bg-white">
        <FccNav />
        <div className="flex items-center justify-evenly gap-x-5">
          <DrumPad />
          <div className="flex flex-col border-2 border-green-600 rounded-lg  border-dotted p-2 items-center gap-y-4">
            <PowerButton />
            <ActionLabel />
            <RangeBar />
          </div>
        </div>
      </div>
      <div>
        <span className="text-white block">by Mynraw</span>
        <Link
          href={"https://github.com/Mynraw/fcc-drum-machine"}
          target="_blank"
          className="text-white"
        >
          Repo is here
        </Link>
      </div>
    </div>
  );
};

export default DrumMachine;
