import { FaFreeCodeCamp } from "react-icons/fa";

const FccNav = () => {
  return (
    <div className="flex items-center justify-end gap-x-2 px-3 py-2">
      <span className="italic">FCC</span>
      <FaFreeCodeCamp />
    </div>
  );
};

export default FccNav;
