import PostsArea from './PostsArea';
import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer"
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText,
    }
}

export default compose(
    connect(mapStateToProps, {addPost}),
    withAuthRedirect
)(PostsArea)

