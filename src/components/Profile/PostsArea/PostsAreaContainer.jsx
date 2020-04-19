import PostsArea from './PostsArea';
import {connect} from "react-redux";
import {addPost, updateNewPostText} from "../../../redux/profileReducer"

let mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostText(text));
        },
        addPost: () => {
            dispatch(addPost());
        }
    }
}

const PostsAreaContainer = connect(mapStateToProps, mapDispatchToProps)(PostsArea)

export default PostsAreaContainer;
