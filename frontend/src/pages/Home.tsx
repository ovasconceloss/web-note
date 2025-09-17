import { Header } from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
    <Header />
    <main className="p-5 space-y-10">
      <section className="space-y-1">
        <h2 className="text-3xl font-bold">Your Documents</h2>
        <p className="text-lg">Manage and organize your documents with ease</p>
      </section>
      <section className="grid grid-cols-4 gap-10">
      </section>
    </main>
    </>
  );
};

export default Home;