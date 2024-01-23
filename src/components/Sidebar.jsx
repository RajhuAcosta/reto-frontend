import { Link } from "react-router-dom";

const Sidebar = ({ home, view1, view2, setShowFilter }) => {
  return (
    <section
      onClick={() => setShowFilter(false)}
      className="min-w-full lg:min-h-screen bg-[#666566] px-8 py-7 text-2xl font-black block lg:block w-[320px] lg:w-auto"
    >
      <div className="bg-[#d3d2d3] text-center text-[#666566] py-6 rounded-lg cursor-pointer">
        {/* <picture>
          <img src="Logo.png" alt="Logo.png" />
        </picture> */}
        Logo
      </div>
      <section className="mt-5">
        <Link to={`${home ? "" : "/"}`}>
          <div
            className={`pl-12 rounded-lg py-1 my-1 ${
              home
                ? "bg-white text-[#666566]"
                : "text-white cursor-pointer hover:bg-[#878387]"
            }`}
          >
            Home
          </div>
        </Link>
        <Link to={`${view1 ? "" : "/view1"}`}>
          <div
            className={`pl-12 rounded-lg py-1 my-1 ${
              view1
                ? "bg-white text-[#666566]"
                : "text-white cursor-pointer hover:bg-[#878387]"
            }`}
          >
            Vista 1
          </div>
        </Link>
        <Link to={`${view2 ? "" : "/view2"}`}>
          <div
            className={`pl-12 rounded-lg py-1 my-1 ${
              view2
                ? "bg-white text-[#666566]"
                : "text-white cursor-pointer hover:bg-[#878387]"
            }`}
          >
            Vista 2
          </div>
        </Link>
      </section>
    </section>
  );
};
export default Sidebar;
