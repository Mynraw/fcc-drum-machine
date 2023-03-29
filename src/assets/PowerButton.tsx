import { useDispatch, useSelector } from "react-redux";
import { powerSwitch } from "../redux/drumSlice";

const PowerButton = () => {
  const dispatch = useDispatch();
  const drumActive = useSelector((state: any) => state.drum.disabled);

  const handlePower = () => {
    dispatch(powerSwitch());
  };
  return (
    <div className="flex flex-col items-center">
      <span className="capitalize">power</span>
      <button
        type="button"
        className="bg-black p-1 w-[50px] cursor-default"
        onClick={handlePower}
      >
        <span
          className={`bg-blue-700 w-5 h-5 cursor-pointer ${
            drumActive ? "float-left" : "float-right"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default PowerButton;
