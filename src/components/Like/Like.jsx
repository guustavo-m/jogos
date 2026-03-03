import { useState } from 'react'
//use state : muda algum estado de algo para mudar entre dados
import './Like.css'

function Like ({name}) {
    const [liked, setLiked] = useState(false)
    //liked guarda o valor da curtida (0/1)
    //setLiked é a função que vai mudar o liked
    //useState(false) deixará o liked começando como 0
    //usar [obj, setObj] é o mesmo que desestruturar um array, ou seja, mexer com as coisas de dentro dele

    const handleLikeClick = () => {
        //handleLikeClick é pra clicar
        //setLiked(!liked) vai fazer o liked ser verdadeiro
        //quando for true, ele vira false, e vice versa, para "curtir e descurtir", e o if vai validar a curtida pra exibir o alert
        setLiked(!liked)
        if (!liked) {
            alert(`Você curtiu ${name}`)
        } else {
            alert(`Você descurtiu ${name}`)
        }
    }

    return (
        <>
        {/* aí ele retorna com um button, que usa o onClick pra clicar, com a função handleLikeClick, e DENTRO DO BUTTON (não junto com o handle), vai ter o ternário pra mudar o coração */}
          <button className="like" type='button' onClick={handleLikeClick}>
            {liked ? '❤️' : '🤍'}
          </button>
          {/* Daí pra frente é só sucesso papai 😜 */}
        </>
    )
}

export default Like