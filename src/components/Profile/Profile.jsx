import React from 'react';
import s from './Profile.module.css';
import PostsArea from "./PostsArea/PostsArea";

const Profile = (props) => {
    return <main className={s.profile}>
        <div className={s.cover}>
            <img src='https://buntingfamilypharmacy.com/wp-content/uploads/2019/01/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg' alt='Cover'></img>
        </div>
        <div className={s.userPhoto}>
            <img src='https://www.nelson-chambers.co.uk/front/images/default-user.jpg' alt='User Photo'></img>
        </div>
        <div className={s.userInfo}>Информация</div>
        <PostsArea postsData={props.state.postsData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.state.newPostText}/>
    </main>
}

export default Profile;
