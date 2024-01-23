import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useQuery } from "@apollo/client";
import CountryList from "../components/CountryList";
import { get_countries } from "../plugins/apollo-client";
import Filter from "../components/Filter";
import { paginateData } from "../utils/pagination";
import Modal from "../components/Modal";

const Home = () => {
  const [arrayFilter, setArrayFilter] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState(null);
  const { data } = useQuery(get_countries);
  const [countries, setCountries] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCountries(data?.countries);
  }, [data]);
  console.log(countries);
  const handleSubmit = (event) => {
    event.preventDefault();
    setCountryName(event.target.countryName.value);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [countries])

  useEffect(() => {
    if (arrayFilter?.length > 1) {
      const filtration = countries?.filter((country) =>
        arrayFilter?.some(
          (elementFilter) => country.continent.name === elementFilter
        )
      );
      setCountries(filtration);
    } else if (arrayFilter?.length === 1) {
      const filtration = countries?.filter((country) =>
        country.continent.name.includes(arrayFilter[0])
      );
      setCountries(filtration);
    } else {
      setCountries(data?.countries);
    }
    if (countryName) {
      setCountries((prevState) =>
        [...prevState].filter((country) => country.name.includes(countryName))
      );
    } else {
      if (arrayFilter?.length > 1) {
        const filtration = countries?.filter((country) =>
          arrayFilter?.some(
            (elementFilter) => country.continent.name === elementFilter
          )
        );
        setCountries(filtration);
      } else if (arrayFilter?.length === 1) {
        const filtration = countries?.filter((country) =>
          country.continent.name.includes(arrayFilter[0])
        );
        setCountries(filtration);
      } else {
        setCountries(data?.countries);
      }
    }
  }, [arrayFilter.length, countryName]);
  const handleInput = () => {
    setShowFilter(!showFilter);
  };
  const handlePreviusPage = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage >= 1) {
      setCurrentPage(newCurrentPage);
    }
    setShowFilter(false);
  };
  const handleNextPage = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage <= lastPage) {
      setCurrentPage(newCurrentPage);
    }
    setShowFilter(false);
  };
  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    countries,
    currentPage
  );
  return (
    <main className="min-h-screen font-[Lato] lg:grid lg:grid-cols-[380px_auto]">
      <Sidebar setShowFilter={setShowFilter} home />
      <section className="min-h-screen bg-[#e2f2ff] px-3 py-8 lg:px-20 lg:py-12 relative">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-[240px] lg:w-[900px] h-16 shadow-md rounded-full bg-white grid lg:grid-cols-[auto_150px] items-center pl-7 lg:pl-10 pr-2.5 "
        >
          <label className="text-[#666566] -mb-3 text-lg" htmlFor="searcher">
            País
          </label>
          <input
            name="countryName"
            autoComplete="off"
            onClick={handleInput}
            placeholder="Escribe el país que deseas ver"
            className="col-start-1 -mt-1.5 text-sm text-[#666566] outline-none border-transparent border-b focus:border-[#009cff]"
            id="searcher"
            type="text"
          />
          <button className="col-start-2 row-start-1 row-span-2 text-xl text-white bg-[#009cff] py-3 rounded-full justify-self-end flex justify-center items-center gap-3 w-[40px] lg:w-full">
            <i className="bx bx-search bx-sm -mb-1"></i>
            <p className="-mt-0.5 hidden lg:block">Buscar</p>
          </button>
        </form>
        <Filter
          showFilter={showFilter}
          arrayFilter={arrayFilter}
          setArrayFilter={setArrayFilter}
        />
        <ul
          onClick={() => setShowFilter(false)}
          className="flex justify-center mx-auto gap-3 pt-2 mt-3"
        >
          {currentPage !== 1 && (
            <li>
              <button
                onClick={handlePreviusPage}
                className="p-2 text-white font-bold rounded-md bg-[#666566] hover:text-[#009cff] hover:bg-black/5 transition-colors"
              >
                {"«"}
              </button>
            </li>
          )}
          {pagesInCurrentBlock.map((page) => (
            <li key={page}>
              <button
                onClick={() => (setCurrentPage(page), setShowFilter(false))}
                className={`p-2 text-white font-bold rounded-md ${
                  currentPage === page
                    ? "bg-[#009cff]"
                    : "bg-[#666566] hover:text-[#009cff] hover:bg-black/5 transition-colors"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          {currentPage !== lastPage && (
            <li>
              <button
                onClick={handleNextPage}
                className="p-2 text-white font-bold rounded-md bg-[#666566] hover:text-[#009cff] hover:bg-black/5 transition-colors"
              >
                {"»"}
              </button>
            </li>
          )}
        </ul>
        <CountryList
          showModal={showModal}
          setShowModal={setShowModal}
          setShowFilter={setShowFilter}
          countries={itemsInCurrentPage}
          infoModal={infoModal}
          setInfoModal={setInfoModal}
        />
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          infoModal={infoModal}
          setInfoModal={setInfoModal}
        />
      </section>
    </main>
  );
};
export default Home;
