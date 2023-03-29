import { FaFreeCodeCamp } from "react-icons/fa";

const FccNav = () => {
  return (
    <div className="flex items-center justify-end gap-x-2 pr-3 pt-2">
      <span className="italic">FCC</span>
      <FaFreeCodeCamp className="text-xl" />
    </div>
  );
};

export default FccNav;
