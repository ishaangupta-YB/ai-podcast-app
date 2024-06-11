import React from "react";

const ProfilePage = ({
  params,
}: {
  params: {
    profileId: string;
  };
}) => {
  return<div className='text-white-1'>
  {params.profileId}
</div>
};

export default ProfilePage;
