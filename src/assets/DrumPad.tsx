import { useDispatch } from "react-redux";
import { currentAction } from "@component/redux/drumSlice";
import { drumPad } from "@component/pages/api/drumPad";

const DrumPad = () => {
  const dispatch = useDispatch();

  const handleAction = (e: any) => {
    dispatch(currentAction(e.target.id));
    const audio = new Audio(
      drumPad.find((pad) => pad.description === e.target.id)?.url
    );
    audio.play();
  };

  return (
    <div className="grid grid-cols-3 gap-2 py-8">
      {drumPad.map((pad) => (
        <button
          id={pad.description}
          type="button"
          onClick={handleAction}
          key={pad.id}
          className="bg-[#ba7a13] p-4 text-center text-white w-[80px] h-[80px] rounded-lg shadow-md shadow-black text-xl"
        >
          {pad.character}
          <audio src={pad.url}></audio>
        </button>
      ))}
    </div>
  );
};

export default DrumPad;
