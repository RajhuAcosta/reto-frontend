import Sidebar from "../components/Sidebar";

const View2 = () => {
  return (
    <main className="min-h-screen font-[Lato] lg:grid lg:grid-cols-[380px_auto]">
      <Sidebar view2 />
      <section className="bg-[#e2f2ff] px-20 py-16 min-h-screen">
        <h1 className="font-black text-[#666566] text-2xl">
          Hola! Esta es la Vista 2
        </h1>
      </section>
    </main>
  );
};
export default View2;
