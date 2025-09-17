import { Header } from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
    <Header />
    <main className="p-5 space-y-10 bg-zinc-100">
      <section className="space-y-1">
        <h2 className="text-3xl font-bold">Your Documents</h2>
        <p className="text-lg">Manage and organize your documents with ease</p>
      </section>
      <section>
      </section>
    </main>
    </>
  );
};

export default Home;