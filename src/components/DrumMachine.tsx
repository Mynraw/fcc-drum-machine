import PowerButton from "@component/assets/PowerButton";
import BankButton from "@component/assets/BankButton";
import DrumPad from "@component/assets/DrumPad";
import FccNav from "@component/assets/FccNav";
import ActionLabel from "@component/assets/ActionLabel";
import RangeBar from "@component/assets/RangeBar";

const DrumMachine = () => {
  return (
    <div className="max-w-xl border-2 border-orange-500">
      <FccNav />
      <div className="flex items-center justify-evenly gap-x-5">
        <DrumPad />
        <div className="flex flex-col border-2 border-orange-400 border-dotted p-2 items-center gap-y-4">
          <PowerButton />
          <ActionLabel />
          <RangeBar />
          <BankButton />
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
