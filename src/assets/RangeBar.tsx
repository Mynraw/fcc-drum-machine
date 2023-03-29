import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { volumeLevel, currentAction } from "../redux/drumSlice";

const RangeBar = () => {
  const dispatch = useDispatch();

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
      className="w-full"
      onChange={handleVolumeChange}
    />
  );
};

export default RangeBar;
