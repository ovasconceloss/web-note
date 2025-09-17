export const Document: React.FC = () => {
  return (
    <article className="w-[15rem] p-2 space-y-1 rounded-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg">New Document</h3>
        <div>
          <h4 className="text-lg">Public</h4>
        </div>
      </div>
      <div>
        <h4 className="text-md">Created by Jonh Doe</h4>
      </div>
      <div>
        <h4 className="text-md">Last edited 20 days ago</h4> 
      </div>
    </article>
  );
};