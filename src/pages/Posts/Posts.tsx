import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { APIPagesPosts } from '../../api/post';
import { IPost } from '../../interfaces/post';
import { RootState } from '../../redux';
import { asyncAllPosts } from '../../redux/stores/Post.store';
import { FlexPrincipal } from '../../styles/Global.styled'
import { NoPost, PagesDiv, PostImage, PostsStyle, PostStyle } from './Posts.styled'

export const Posts = () => {
    const posts:IPost[] = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();
    const isInitialMount = useRef(true);

    const [page, setPage] = useState<number>(1);
    const [pages, setPages] = useState<number[]>([1]);

    const getPages = async () => {
        const maxPages = await APIPagesPosts();
        if(maxPages.data <= 20) return;

        const pages = [];
        for (let index = 1; index < (maxPages.data/20)+1; index++) pages.push(index);        
        setPages(pages);
    }

    useEffect(() => {
        if (isInitialMount.current) {
            getPages();
            isInitialMount.current = false;
        }

        dispatch(asyncAllPosts(page))
    }, [dispatch, page])

    return (
        <FlexPrincipal alignCenter={true}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <PostsStyle>
                    {posts.length === 0? <NoPost>No posts found</NoPost>:
                    posts.map(({ title, description, image, createdAt }, index) => {
                        var isBlue:boolean = false;
                        if(index%2 === 0) isBlue = true;
                        return <PostStyle key={index} blue={isBlue}>
                            { typeof image === "string"&& <PostImage style={{backgroundImage: `url('${image}')`}} />} 
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p><strong>Created At: </strong>{new Date(createdAt || 0).toLocaleDateString("en-US")}</p>
                        </PostStyle>
                    })}
                </PostsStyle>
                <PagesDiv>
                        {pages.map((pageNumber) => {
                            var active = false;
                            if(pageNumber === page) active = true
                            return <div 
                                        key={pageNumber}
                                        onClick={() => setPage(pageNumber)}
                                        className={active? 'active-page' : ''}>
                                <p>{pageNumber}</p>
                            </div>
                        })}
                    </PagesDiv>
            </div>
        </FlexPrincipal>
    )
}
