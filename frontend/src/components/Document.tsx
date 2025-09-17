import { Calendar, User } from "lucide-react";

export const Document: React.FC = () => {
  return (
    <article 
      className="w-[20rem] p-2 space-y-2 rounded-sm cursor-pointer border-b-2 rounded-b-none 
      border-zinc-300 transition-all ease-in-out hover:scale-105 hover:border-zinc-900 select-none">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">New Document</h3>
        <h4 className="w-[5.0rem] text-lg bg-zinc-900 rounded-full text-zinc-100 text-center">Public</h4>
      </div>
      <div className="flex items-center space-x-2">
        <User width={15}/>
        <h4 className="text-md">Created by Jonh Doe</h4>
      </div>
      <div className="flex items-center space-x-2">
        <Calendar width={15}/>
        <h4 className="text-md">Last edited 20 days ago</h4> 
      </div>
    </article>
  );
};