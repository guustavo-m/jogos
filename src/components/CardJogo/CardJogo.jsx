import './CardJogo.css'
import Like from "../Like/Like"

function CardJogo ({img, title, genre, price, sale}) {
    const onSale = sale ? "🟢 PROMOÇÃO 🟢" : "-"
    return (
        <>
        <div className="card">
            <img src={img} alt={`Name : ${title}`} />
            <h2 className="title">{title}</h2>
            <p className="genre">Gênero : {genre}</p>
            <p className='preco'>Preço : {`${price <= 0 ? 'GRATUITO' : (`R$ ${price.toFixed(2)}`)}`}</p>
            <p className="on-sale">{onSale}</p>
            <Like name={title}/>
        </div>
        </>
    )
}

export default CardJogo