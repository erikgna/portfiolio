import { FlexPrincipal } from '../../styles/Global.styled'
import { PostsStyle, PostStyle } from './Posts.styled'

export const Posts = () => {
  return (
    <FlexPrincipal alignCenter={true}>
        <PostsStyle>
            <PostStyle blue={false}>
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg" alt="Some post" />
                <h2>Title of the post</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </PostStyle>
            <PostStyle blue={true}>
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg" alt="Some post" />
                <h2>Title of the post</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </PostStyle>
            <PostStyle blue={false}>
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg" alt="Some post" />
                <h2>Title of the post</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </PostStyle>
            <PostStyle blue={true}>
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg" alt="Some post" />
                <h2>Title of the post</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </PostStyle>
            <PostStyle blue={true}>
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/simulated_bh.jpg" alt="Some post" />
                <h2>Title of the post</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <div>
                    <p><strong>Author: </strong>Erik Gabriel Na</p>
                    <p><strong>Date: </strong>25/05/2022</p>
                </div>
            </PostStyle>
        </PostsStyle>
    </FlexPrincipal>
  )
}
