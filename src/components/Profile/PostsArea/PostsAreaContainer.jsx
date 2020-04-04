import PostsArea from './PostsArea';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch({type:'UPDATE-NEW-POST-TEXT', text: text});
        },
        addPost: () => {
            dispatch({type: 'ADD-POST'});
        }
    }
}

const PostsAreaContainer = connect(mapStateToProps, mapDispatchToProps)(PostsArea)

export default PostsAreaContainer;
