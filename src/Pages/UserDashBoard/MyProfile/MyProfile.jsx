import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../../../AuthenticationPage/AuthProvider/AuthProvider";


const MyProfile = () => {

  const { user } = useContext(AuthContext)
  const userEmail = user?.email

  const [allProfile, setAllProfile] = useState([])
  useEffect(() => {
    fetch('https://diagno-easy-server.vercel.app/users')
      .then(res => res.json())
      .then(data => setAllProfile(data))
  }, [])

  const loggedInUser = allProfile?.filter(profile => profile.email === userEmail)
  // console.log(loggedInUser[0]?.name)




  return (
    <div className="bg-slate-800 p-4 pb-32">
      <SectionTitle
        heading={'My Profile'}
      >
      </SectionTitle>


      <div className="md:flex gap-10 justify-center">
        <> <div className="">
          <img className="rounded-full w-32" src={loggedInUser[0]?.singleImg} alt="" />
          <div className="text-center mt-4 text-4xl">
            <h1 className="btn btn-outline bg-blue-500">Profile Edit:</h1>
          </div>
        </div>
          <div className="md:border-2">

          </div>
          <div className="space-y-4">
            <h1 className="text-4xl">Profile Name: {loggedInUser[0]?.name}</h1>
            <h1 className="text-4xl">Email:  {loggedInUser[0]?.email}</h1>
            <h1 className="text-4xl">Blood Group:  {loggedInUser[0]?.bloodGroup}</h1>
          </div>
        </>
      </div>
    </div>
  );
};

export default MyProfile;


