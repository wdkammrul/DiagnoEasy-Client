

const MyProfile = () => {
    return (
      <div className="md:flex gap-10 justify-center bg-slate-800 p-32">
         <div className="">
                <img className="rounded-full w-32" src="https://i.ibb.co/hst22rX/myPhoto.png" alt="" />
                <div className="text-center mt-4 text-4xl">
                    <h1 className="btn btn-outline">Profile Name</h1>
                </div>
         </div>
         <div className="md:border-2">
            
         </div>
         <div className="space-y-4">
            <h1 className="text-4xl">Name</h1>
            <h1 className="text-4xl">Email</h1>
            <h1 className="text-4xl">Phone</h1>
         </div>
      </div>
    );
};

export default MyProfile;


