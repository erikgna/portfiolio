import { useSelector } from 'react-redux';
import { IPost } from '../../interfaces/post';
import { RootState } from '../../redux';
import { FlexPrincipal } from '../../styles/Global.styled'
import { PostsStyle, PostStyle } from './Posts.styled'

export const Posts = () => {
    const posts:IPost[] = useSelector((state: RootState) => state.post);
    
    return (
        <FlexPrincipal alignCenter={true}>
            <PostsStyle>
                {posts.map(({ title, description, imageURL, createdAt }, index) => {
                    var isBlue:boolean = false;
                    if(index%2 === 0) isBlue = true;
                    return <PostStyle key={title+index} blue={isBlue}>
                        <img src={imageURL} alt={title} />
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p><strong>Created At:</strong>{createdAt}</p>
                    </PostStyle>
                })}            
            </PostsStyle>
        </FlexPrincipal>
    )
}
