
export default function Evento({titulo, descricao, horario, local}){
    return(
        <section className="Evento">
        <div className="Informacao">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <p>{horario}</p>
            <p>{local}</p>
        </div>
           <img src="roderjan.jpg" alt="imagem"></img>
        </section>
     
    )
}