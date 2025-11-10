import '../style/description.scss'

export default function Description({recipes = []}) {
    return (
        <article className="description__card">
            <section>
                <div className="container__cards">
                    <div className="card">
                        <div className="number">1</div>
                        <p className="description__text">
                            Scrivere sulla barra di ricerca il tipo di ricetta desiderata:
                            <span><b>Es:</b> Easy Homemade Rice and Beans</span>
                            <span><b>Es:</b> solo la lettera iniziale per tutte quelle ricette che iniziano con...</span>
                            <span><b>Ps:</b> per tutte le ricette non scrivere nulla.</span>
                        </p>
                    </div>
                    <div className="card">
                        <div className="number">2</div>
                        <p className="description__text">Una volta scritto il nome cliccare sul bottone "search"</p>
                    </div>
                    <div className="card">
                        <div className='flex gap-2 items-center'>
                            <div className="number">3</div>
                            <div>Recipes List:</div>
                        </div>
                        <div className="description__text">
                            <ul>
                                {recipes.length > 0 ? (
                                recipes.map((food, index) => <li key={index}>{food.title}</li>)
                                ) : (
                                <li>Nessuna ricetta trovata</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
} 