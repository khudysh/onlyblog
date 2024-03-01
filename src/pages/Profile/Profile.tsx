import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState";
import "./Profile.scss"
import { getUserProfile } from "../../store/blog/blogActions";
import ProfileUserCard from "./ProfileUserCard";
import ProfilePosts from "./ProfilePosts";
import ProfileSubs from "./ProfileSubs";
function Profile() {
  const { profileId } = useParams();
  const dispatch = useAppDispatch();
  const { profileUser, posts, subs } = useAppSelector((state) => state.blog);

  useEffect(() => {


    document.title = profileId!;
    dispatch(getUserProfile(profileId!));

  }, [profileId])



  console.log("Rednder Profile")

  return (
    <div className="profile">
      <ProfileUserCard profileUser={profileUser} />
      <ProfilePosts posts={posts} />
      <ProfileSubs subs={subs} profileUser={profileUser} />
    </div>
  )
}

export default Profile