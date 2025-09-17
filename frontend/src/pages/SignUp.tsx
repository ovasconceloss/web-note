import { Header } from "../components/Header";
import { useForm, type SubmitHandler } from "react-hook-form"

type FormInput = {
  email: string,
  password: string,
  username: string,
}

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <>
    <Header/>
    <main className="p-5 space-y-10 select-none">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex flex-col space-y-2">
          <label htmlFor="username">Username</label>
          <input 
            autoComplete={"false"}
            {...register("username", { required: true })}
            className="w-[20rem] p-1 border-1 border-zinc-300 rounded-sm outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email Address</label>
          <input 
            autoComplete={"false"}
            {...register("email", { required: true })}
            className="w-[20rem] p-1 border-1 border-zinc-300 rounded-sm outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <input 
            autoComplete={"false"}
            {...register("password", { required: true })}
            className="w-[20rem] p-1 border-1 border-zinc-300 rounded-sm outline-none"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </main>
    </>
  );
};

export default SignUp;