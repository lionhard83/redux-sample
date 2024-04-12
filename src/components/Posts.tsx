import {useAddPostMutation, useGetPostsQuery } from "../redux/fakeApi"


export const Posts = () => {
    const {data, error, isLoading} = useGetPostsQuery();
    const [addPost] = useAddPostMutation();

    const handleClick = () => {
        addPost({title: 'prova', body: 'prova', userId: 1});
    }
    

    if (isLoading) return <>Loading...</>
    if (error) return <>{error}</>
    if (!data) return <>No data Provided</>
    
    return <>
        <button onClick={handleClick}>Add posts</button>
        <ul>
            {data.map(({id, title, body, userId}) => <li key={id}>{userId}: {title}<br />{body}</li>)}
        </ul>
        
    </>
}
