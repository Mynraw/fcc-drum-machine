import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { volumeLevel, currentAction } from "../redux/drumSlice";

const RangeBar = () => {
  const dispatch = useDispatch();
  const volume = useSelector((state: any) => state.drum.volume);

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(volumeLevel(e.target.value));
    dispatch(currentAction(`Volume: ${e.target.value}`));
  };
  return (
    <input
      type={"range"}
      min={0}
      max={100}
      step={1}
      value={volume}
      className="w-full"
      onChange={handleVolumeChange}
    />
  );
};

export default RangeBar;
