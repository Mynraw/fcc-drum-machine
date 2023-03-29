import { useDispatch, useSelector } from "react-redux";
import { switchBank, currentAction } from "../redux/drumSlice";

const BankButton = () => {
  const dispatch = useDispatch();
  const bankStatus = useSelector((state: any) => state.drum.bank);

  const handleBank = () => {
    dispatch(switchBank());
    dispatch(currentAction(bankStatus ? "asd" : "dsa"));
  };

  return (
    <div className="flex flex-col items-center">
      <span className="capitalize">bank</span>
      <button
        type="button"
        className="bg-black p-1 w-[50px] cursor-default"
        onClick={handleBank}
      >
        <span
          className={`bg-blue-700 w-5 h-5 cursor-pointer ${
            bankStatus ? "float-left" : "float-right"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default BankButton;
