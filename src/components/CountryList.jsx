import CountryCard from "./CountryCard";

const CountryList = ({
  countries,
  setShowFilter,
  showModal,
  setShowModal,
  infoModal,
  setInfoModal,
}) => {
  console.log(countries);
  return (
    <section
      onClick={() => setShowFilter(false)}
      className="grid grid-cols-[repeat(auto-fit,270px)] justify-center 3xl:max-w-[1300px] mx-auto gap-5 pt-6 xsm:pt-8 pb-10 px-7"
    >
      {/* className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] */}
      {countries?.map((country) => (
        <CountryCard
          infoModal={infoModal}
          setInfoModal={setInfoModal}
          showModal={showModal}
          setShowModal={setShowModal}
          setShowFilter={setShowFilter}
          key={country.code}
          country={country}
          countryCode={country.code}
        />
      ))}
    </section>
  );
};
export default CountryList;
