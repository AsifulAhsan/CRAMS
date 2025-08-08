import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex bg-[#1A1A1A] w-full m-0 justify-center items-center">
      <div className="flex flex-col gap-8 items-center pl-6 mx-85 my-60">
        <h1 className="text-white font-semibold text-4xl">
          This Page Does Not Exist!
        </h1>
        <Link to={"/"}>
          <button className="border-2 bg-white p-3 rounded-xl text-xl text-black font-bold cursor-pointer hover:text-white border-transparent hover:bg-[#035f64]">
            RETURN HOME
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
