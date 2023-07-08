import { Component } from 'solid-js'
import { appStore } from '../../stores/app-store'

const Profile: Component = () => {
  const user = appStore.currentUser

  return (
    <>
      <h1>Profile</h1>
      <article>
        <p>
          Username: <span>{user?.username}</span>
        </p>
        <p>
          Name: <span>{user?.name}</span>
        </p>
      </article>
    </>
  )
}

export default Profile
