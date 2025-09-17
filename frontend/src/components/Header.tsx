import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="w-full p-5 flex items-center justify-between select-none">
      <section>
        <Link to={'/'} className="text-2xl font-bold cursor-pointer transition-all ease-in-out hover:text-zinc-500">WebNote</Link>
      </section>
      <section className="space-x-5">
        <Link to={'/'}>
          <button 
            className="
              w-[6.0rem] p-1 rounded-sm bg-transparent border-2 border-zinc-900 text-zinc-900 cursor-pointer
              transition-all ease-in-out hover:bg-zinc-900 hover:text-zinc-100">Sign In</button>
        </Link>
        <Link to={'/signup'} >
          <button 
            className="
              w-[6.0rem] p-1 rounded-sm bg-zinc-900 border-2 border-zinc-900 text-zinc-100 cursor-pointer
              transition-all ease-in-out hover:bg-zinc-100 hover:text-zinc-900">Sign Up</button>
        </Link>
      </section>
    </header>
  );
};