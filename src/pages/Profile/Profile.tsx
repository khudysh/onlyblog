import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState";
import { userType } from "../../store/user/userTypes";
function Profile() {


  const { profileId } = useParams();
  const dispatch = useAppDispatch();
  const { curUser } = useAppSelector((state) => state.user);
  const [profileUser, setProfileUser] = useState<userType>({})

  useEffect(() => {
    document.title = profileId!;
    if (profileId == curUser.username) setProfileUser(curUser)
    console.log(profileUser)
    // else dispatch(getUserByUsername(profileId))
  }, [profileId, curUser])


  return (
    <div> 
      <h1>Profile {profileUser.firstName}</h1>
    <img src={profileUser.image} /></div>
  )
}

export default Profile