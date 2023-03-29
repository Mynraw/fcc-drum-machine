import { drumPad } from "@component/pages/api/drumPad";

const DrumPad = () => {
  return (
    <div className="grid grid-cols-3 gap-2 py-8">
      {drumPad.map((pad) => (
        <button
          type="button"
          key={pad}
          className="bg-gray-500 p-4 text-center w-[80px] h-[80px] rounded-lg shadow-md shadow-black"
        >
          {pad}
        </button>
      ))}
    </div>
  );
};

export default DrumPad;
