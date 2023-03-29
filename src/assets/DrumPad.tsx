import { useDispatch } from "react-redux";
import { currentAction } from "@component/redux/drumSlice";
import { drumPad } from "@component/pages/api/drumPad";

const DrumPad = () => {
  const dispatch = useDispatch();

  const handleAction = (e: any) => {
    dispatch(currentAction(e.target.id));
  };

  return (
    <div className="grid grid-cols-3 gap-2 py-8">
      {drumPad.map((pad, index) => (
        <button
          id={index.toString()}
          type="button"
          onClick={handleAction}
          key={pad}
          className="bg-gray-500 p-4 text-center w-[80px] h-[80px] rounded-lg shadow-md shadow-black text-xl"
        >
          {pad}
        </button>
      ))}
    </div>
  );
};

export default DrumPad;
