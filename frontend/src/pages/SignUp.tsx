import { Header } from "../components/Header";
import { useForm, type SubmitHandler } from "react-hook-form"

type FormInput = {
  email: string,
  confirm: string,
  password: string,
  username: string,
}

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <>
    <Header/>
    <main className="flex flex-col items-center p-5 space-y-15 select-none">
      <section>
        <h1 className="text-2xl font-bold">Welcome! Sign up now!</h1>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-8">
        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-lg">Username</label>
          <input 
            autoComplete="off"
            {...register("username", { required: true })}
            className="w-[25rem] p-1 border-1 border-zinc-300 rounded-sm outline-none text-lg
            transition-all ease-in-out focus:border-zinc-900"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-lg">Email Address</label>
          <input 
            autoComplete="off"
            {...register("email", { required: true })}
            className="w-[25rem] p-1 border-1 border-zinc-300 rounded-sm outline-none text-lg
            transition-all ease-in-out focus:border-zinc-900"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-lg">Password</label>
          <input 
            autoComplete="off"
            {...register("password", { required: true })}
            className="w-[25rem] p-1 border-1 border-zinc-300 rounded-sm outline-none text-lg
            transition-all ease-in-out focus:border-zinc-900"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="confirm" className="text-lg">Confirm Password</label>
          <input 
            autoComplete="off"
            {...register("confirm", { required: true })}
            className="w-[25rem] p-1 border-1 border-zinc-300 rounded-sm outline-none text-lg
            transition-all ease-in-out focus:border-zinc-900"
          />
        </div>
        <button 
          type="submit"
          className="w-[25rem] p-2 text-lg bg-zinc-900 border-2 border-zinc-900 text-zinc-100 rounded-sm cursor-pointer
          transition-all ease-in-out hover:bg-transparent hover:text-zinc-900">Create account</button>
      </form>
    </main>
    </>
  );
};

export default SignUp;