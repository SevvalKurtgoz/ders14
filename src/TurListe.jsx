
function TurListe({turlar, turKaldir}) {

    return (
        <>
            {
                turlar.map( (eleman) => {
                    return (
                        <article className="single-tour" key={eleman.id}>
                            <img src={eleman.image} alt={eleman.name} />

                            <footer>
                                <div className="tour-info">
                                    <h4>{eleman.name}</h4>
                                    <h4 className="tour-price">{eleman.price}</h4>
                                </div>
                                
                                <button className="delete-btn" onClick={ ()=>{ turKaldir(eleman.id) } }>İlgilenmiyorum</button>
                            </footer>
                        </article>
                        )
                    }  )
                }
          </>
    )
}

export default TurListe