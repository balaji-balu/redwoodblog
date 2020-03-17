//import { withCell } from '@redwoodjs/web';
import { Link, routes } from '@redwoodjs/router'
import Posts from 'src/components/Posts'
//console.log("/components/PostsCell.js")
export const QUERY = gql`
  query POSTS {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No posts yet. '}
      <Link
        to={routes.newPost()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ posts }) => {
  return <Posts posts={posts} />
}

  const names = [
    'QUERY',
    'Loading',
    'Success',
    'Empty',
  ]

  //const exports = []
  //`${names.join(', ')}`
  //export default withCell( {QUERY, Loading, Success, Empty} )

  /*
function PostsCell() {
  console.log("------------------------ PostsCell called hurrarrrrrray.......")
  return (
    <Posts/>
  )
}
*/
//console.log("Last PostsCell.js xxxxxxxxxxxxxxxxxxxxxxxxxx")
//export default PostsCell;
