const Modal = ({ showModal, setShowModal, infoModal }) => {
  const codeLWC = infoModal?.code.toLowerCase();
  console.log(infoModal);
  return (
    <section
      className={`w-[320px] lg:w-auto bg-white right-0 top-96 fixed -translate-y-1/2 rounded-md py-6 px-8 ${
        showModal ? "visible" : "invisible"
      } `}
    >
      <i
        onClick={() => setShowModal(false)}
        className="bx bx-x bx-sm text-[#666566] hover:text-[#009cff] hover:cursor-pointer absolute right-5 -translate-y-1"
      ></i>
      <picture>
        <img className="h-[100px]" src={``} alt="CountryImage" />
      </picture>
      <div className="bg-white flex gap-3 items-center py-3">
        <img
          className="w-12 h-8"
          src={`https://flagcdn.com/w320/${codeLWC}.png`}
          alt="FlagImage"
        />
        <div>
          <h4 className="text-[#009cff] text-lg font-bold">
            {infoModal?.name}
          </h4>
          <h5 className="text-[#666566] text-lg font-medium">
            {infoModal?.continent.name}
          </h5>
        </div>
      </div>
      <div>
        <h6 className="text-[#009cff] text-lg font-bold">
          Capital:
          <span className="ml-4 text-[#666566] text-lg font-medium">
            {infoModal?.capital}
          </span>
        </h6>
        <h6 className="text-[#009cff] text-lg font-bold">
          Language:
          <span className="ml-4 text-[#666566] text-lg font-medium">
            {infoModal?.languages.map((language) => language.name).join(", ")}
          </span>
        </h6>
        <h6 className="text-[#009cff] text-lg font-bold">
          Population:
          <span className="ml-4 text-[#666566] text-lg font-medium">
            {infoModal?.name}
          </span>
        </h6>
        <h6 className="text-[#009cff] text-lg font-bold">
          Currency:
          <span className="ml-4 text-[#666566] text-lg font-medium">
            {infoModal?.currencies.map((currency) => currency).join(", ")}
          </span>
        </h6>
      </div>
    </section>
  );
};
export default Modal;
