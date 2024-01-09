function ProfileCard({title, handle, image }) {
   
    return (<div>
        <img src={image} alt="Profile" width="200" height="200"/>
        <h1>Title is {title}</h1>
        <h2>Handle is {handle}</h2>
    </div>)
}

export default ProfileCard;