const BankButton = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="capitalize">bank</span>
      <div className="bg-black p-1 flex items-center">
        <button className="bg-blue-700 w-5 h-5 mr-0.5">on</button>
        <button className="bg-blue-700 w-5 h-5 ml-0.5">off</button>
      </div>
    </div>
  );
};

export default BankButton;
