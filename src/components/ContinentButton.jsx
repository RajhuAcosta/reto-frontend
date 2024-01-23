import { useState } from "react";

const ContinentButton = ({ nameContinent, arrayFilter, setArrayFilter }) => {
  const [selectContinent, setSelectContinent] = useState(false);
  const handleClick = () => {
    if (!arrayFilter.includes(nameContinent)) {
      setArrayFilter((prevState) => [...prevState, nameContinent]);
      setSelectContinent(true);
    } else {
      setArrayFilter((prevState) =>
        [...prevState].filter(
          (elementFilter) => elementFilter !== nameContinent
        )
      );
      setSelectContinent(false);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>
        <picture>
          <img
            className={`max-h-24 w-[120px] rounded-xl border ${
              selectContinent ? "border-[#009cff]" : "border-transparent"
            }`}
            src={`/images/${nameContinent}.png`}
            alt=""
          />
        </picture>
      </button>
      <h3 className="text-[#666566] pl-1">{nameContinent}</h3>
    </div>
  );
};
export default ContinentButton;
