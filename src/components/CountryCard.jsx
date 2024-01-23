import { useQuery } from "@apollo/client";
import { get_img_country } from "../plugins/apollo-client";

const CountryCard = ({
  country,
  countryCode,
  setShowFilter,
  showModal,
  setShowModal,
  infoModal,
  setInfoModal,
}) => {
  const codeLowerCase = countryCode.toLowerCase();
  const { data } = useQuery(get_img_country, {
    variables: {
      countryCode,
    },
  });
  // console.log(data?.countryImage);
  // console.log(country);
  return (
    <article
      onClick={() => (
        setShowFilter(false), setShowModal(true), setInfoModal(country)
      )}
      className="rounded-3xl overflow-hidden"
    >
      <picture>
        <img className="h-[100px]" src={``} alt="CountryImage" />
      </picture>
      <div
        className={`${
          infoModal?.code === country?.code ? "bg-[#009cff]" : "bg-white"
        } flex gap-3 items-center px-4 py-3`}
      >
        <img
          className="w-12 h-8"
          src={`https://flagcdn.com/w320/${codeLowerCase}.png`}
          alt="FlagImage"
        />
        <div>
          <h4
            className={`${
              infoModal?.code === country?.code
                ? "text-white"
                : "text-[#009cff]"
            } text-lg font-bold`}
          >
            {country.name}
          </h4>
          <h5
            className={`${
              infoModal?.code === country?.code
                ? "text-white"
                : "text-[#666566]"
            } text-lg font-medium`}
          >
            {country.continent.name}
          </h5>
        </div>
      </div>
    </article>
  );
};
export default CountryCard;
