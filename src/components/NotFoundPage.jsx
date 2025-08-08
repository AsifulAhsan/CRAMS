import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full justify-center items-center gap-4 p-8 rounded-lg bg-[#282C34]">
        <div className="text-left">
          <p className="font-mono text-lg text-[#56B6C2] w-full">
            <span className="text-[#E06C75]">const</span>{" "}
            <span className="text-[#C678DD]">error</span> ={" "}
            <span className="text-[#D19A66]">404</span>;
          </p>

          <p className="font-mono text-lg text-[#56B6C2] w-full">
            <span className="text-[#E06C75]">if</span> (
            <span className="text-[#C678DD]">error</span>) {"{"}
          </p>

          <p className="font-mono text-lg text-[#5E6773] w-full pl-6">
            // Page not found
          </p>

          <p className="font-mono text-lg text-[#ABB2BF] w-full pl-6">
            <span className="text-[#E06C75]">throw new</span>{" "}
            <span className="text-[#C678DD]">Error</span>(
            <span className="text-[#98C379]">"Not Found"</span>);
          </p>

          <p className="font-mono text-lg text-[#ABB2BF] w-full">{"}"}</p>
        </div>

        <Link to={"/"} className="mt-4">
          <button className="border-2 bg-[#ABB2BF] p-3 rounded-xl text-xl text-[#282C34] font-bold cursor-pointer hover:text-white border-transparent hover:bg-[#035f64] transition-colors duration-300">
            RETURN HOME
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
