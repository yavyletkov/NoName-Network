import React from 'react';
import s from './PostsArea.module.css';
import Post from './Post/Post';
import PostForm from "./PostForm/PostForm";

class PostsArea extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({a: 1})
    //     }, 5000)
    // } ПРОВЕРОЧКА SHOULDCOMPONENTUPDATE

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state
    }

    onSubmit (formData) {

        this.props.addPost(formData.postText);
        formData.postText = ''
    }

    render() {
        // console.log('RENDER');
        let posts = this.props.postsData.map(function (item) {
            return (<Post key={item.id} id={item.id} text={item.text}/>)
        });

        // const onSubmit = (formData) => {
        //
        //     this.props.addPost(formData.postText);
        //     formData.postText = ''
        // }

        return <div className={s.postsArea}>

            <PostForm onSubmit={this.onSubmit.bind(this)}/>

            <div className={s.list}>
                {posts}
            </div>
        </div>
    }
}

export default PostsArea;
