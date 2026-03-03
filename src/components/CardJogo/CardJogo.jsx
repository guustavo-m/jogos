import './CardJogo.css'

function CardJogo ({img, title, genre, price, sale}) {
    const onSale = sale ? "🟢 PROMOÇÃO 🟢" : "-"
    return (
        <>
        <div className="card">
            <img src={img} alt={`Name : ${title}`} />
            <h2 className="title">{title}</h2>
            <p className="genre">Gênero : {genre}</p>
            <p className="price">Preço : R$ {price.toFixed(2)}</p>
            <p className="on-sale">{onSale}</p>
        </div>
        </>
    )
}

export default CardJogo