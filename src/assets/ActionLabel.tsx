import { useSelector } from "react-redux";

const ActionLabel = () => {
  const currentAction = useSelector((state: any) => state.drum.drumAction);

  return (
    <span className="py-2 px-6 min-w-[180px] min-h-[40px] text-lg capitalize bg-black text-white text-center">
      {currentAction}
    </span>
  );
};

export default ActionLabel;
