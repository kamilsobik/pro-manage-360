import { RotatingSquare } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" flex items-center justify-center relative w-full min-h-screen">
      <RotatingSquare
        height="100"
        width="100"
        color="#3730A3"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
