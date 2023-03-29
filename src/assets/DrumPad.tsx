import { useDispatch } from "react-redux";
import { currentAction } from "@component/redux/drumSlice";
import { drumPad } from "@component/pages/api/drumPad";
import { BaseSyntheticEvent, ChangeEvent } from "react";

const DrumPad = () => {
  const dispatch = useDispatch();

  const handleAction = (e: BaseSyntheticEvent) => {
    dispatch(currentAction(e.target.id));

    const audio = new Audio(
      drumPad.find((pad) => pad.description === e.target.id)?.url
    );
    audio.play();
  };

  const handleKeyPress = (e: any) => {
    const foundKey = drumPad.find(
      (pad) => pad.character.toLowerCase() === e.key
    );

    if (foundKey) {
      dispatch(currentAction(foundKey.description));
      const audio = new Audio(foundKey.url);
      audio.play();
    }
  };

  // const handleVolume = (e: ChangeEvent<HTMLAudioElement>) => {
  //   console.log(e);
  // };

  return (
    <div className="grid grid-cols-3 gap-2 py-8" onKeyDown={handleKeyPress}>
      {drumPad.map((pad) => (
        <button
          id={pad.description}
          type="button"
          onClick={handleAction}
          key={pad.id}
          className="bg-[#ba7a13] p-4 text-center text-white w-[80px] h-[80px] rounded-lg shadow-md shadow-black text-xl"
        >
          {pad.character}
          <audio
            id={pad.character}
            src={pad.url}
            // onVolumeChange={handleVolume}
          ></audio>
        </button>
      ))}
    </div>
  );
};

export default DrumPad;
