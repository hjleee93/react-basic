import React from 'react'
import { useParams } from 'react-router-dom'

const profileData = {
  hj: {
    name: "hyeonjeong",
    desc: "front-end"
  },
  paeki: {
    name: "paeki",
    desc: "pet"
  }
}

function Profile() {

  const { username } = useParams()
  const profile = profileData[username]

  if (!profile) {
    return <div>Not exist user</div>

  }
  return (
    <div>
      <h3>{username}: ({profile.name})</h3>
      <p>
        {profile.desc}
      </p>
    </div>
  )
}
export default Profile;
