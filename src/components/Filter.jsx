import ContinentButton from "./ContinentButton";

const Filter = ({ arrayFilter, setArrayFilter, showFilter }) => {
  return (
    <section
      className={`bg-white absolute left-1/2 -translate-x-2/3 translate-y-4 rounded-3xl py-5 px-8 ${
        showFilter ? "visible" : "invisible"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="text-[#666566] text-lg font-medium">
          Filtrar por continentes
        </h1>
        <h2 className="text-[#009cff] text-lg font-semibold cursor-pointer">
          Limpiar
        </h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-4">
        <ContinentButton
          arrayFilter={arrayFilter}
          setArrayFilter={setArrayFilter}
          nameContinent="Europe"
        />
        <ContinentButton
          arrayFilter={arrayFilter}
          setArrayFilter={setArrayFilter}
          nameContinent="America"
        />
        <ContinentButton
          arrayFilter={arrayFilter}
          setArrayFilter={setArrayFilter}
          nameContinent="Asia"
        />
        <ContinentButton
          arrayFilter={arrayFilter}
          setArrayFilter={setArrayFilter}
          nameContinent="Oceania"
        />
        <ContinentButton
          arrayFilter={arrayFilter}
          setArrayFilter={setArrayFilter}
          nameContinent="Africa"
        />
      </div>
    </section>
  );
};
export default Filter;
