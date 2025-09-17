export const Document: React.FC = () => {
  return (
    <article className="w-[20rem] p-2 space-y-2 rounded-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">New Document</h3>
        <div>
          <h4 className="text-xl">Public</h4>
        </div>
      </div>
      <div>
        <h4 className="text-lg">Created by Jonh Doe</h4>
      </div>
      <div>
        <h4 className="text-lg">Last edited 20 days ago</h4> 
      </div>
    </article>
  );
};