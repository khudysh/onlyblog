import { useEffect } from "react";
import { useParams } from "react-router-dom"
function Profile() {


  const { profileId } = useParams();

  useEffect(() => {
    document.title = profileId!;
  }, [profileId])


  return (
    <div>Profile {profileId}</div>
  )
}

export default Profile