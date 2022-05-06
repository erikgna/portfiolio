import { useContext } from 'react'

import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { ThemeContext } from '../../contexts/post_context'

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
  const { dark, toggleDark } = useContext(ThemeContext)

  const teste = () => {
    console.log(dark)
    toggleDark?.()
  }

  return (
    <div>
      <div>
        <Post />
      </div>
      <button onClick={() => teste()}>This gotta</button>
    </div>
  )
}
