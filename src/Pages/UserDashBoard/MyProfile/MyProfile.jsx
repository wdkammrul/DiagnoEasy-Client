import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const MyProfile = () => {
  return (
    <div className="bg-slate-800 p-4 pb-32">
      <SectionTitle
        heading={'My Profile'}
      >
      </SectionTitle>
      <div className="md:flex gap-10 justify-center">
        <div className="">
          <img className="rounded-full w-32" src="https://i.ibb.co/hst22rX/myPhoto.png" alt="" />
          <div className="text-center mt-4 text-4xl">
            <h1 className="btn btn-outline bg-blue-500">Profile Name</h1>
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
    </div>
  );
};

export default MyProfile;


