import { AiFillLike, AiFillDislike } from 'react-icons/ai';

const Post = () => {
  return (
    <div>
      <div>
        <img src="" alt="Product" />
      </div>
      <div>
        <h4>Title</h4>
        <p>Description</p>
        <strong>$ 40</strong>
      </div>
      <div>
      <div>
          <AiFillLike />
          <p>12</p>
        </div>
        <div>
          <AiFillDislike />
          <p>1</p>
        </div>
      </div>
      <div>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </div>
  )
}

export const Posts = () => {
  return (
    <div>
      <div>
        <Post />
      </div>
      <button>This gotta</button>
    </div>
  )
}
