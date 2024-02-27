import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState";
import { userData } from "../../store/user/userTypes";
function Profile() {
  const { profileId } = useParams();
  const dispatch = useAppDispatch()
  const { curUser } = useAppSelector((state) => state.user)

  const [profileUser, setProfileUser] = useState<userData>({})

  useEffect(() => {
    document.title = profileId!;

    if (profileId == curUser.username) {
      setProfileUser(curUser);
    } 
    // else dispatch(getUserByUsername(profileId))
  }, [profileId, curUser])


  return (
    <div>
      <h1>Profile {profileUser.username}</h1>
      <p>{profileUser.firstName} {profileUser.lastName}</p>
      <p>{profileUser.gender} {profileUser.email}</p>
      <img src={profileUser.image} />
    </div>
  )
}

export default Profile