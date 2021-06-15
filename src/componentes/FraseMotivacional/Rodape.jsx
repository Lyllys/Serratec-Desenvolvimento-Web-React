const Rodape = (props) => {

    const opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const data = props.criadaEm.toLocaleDateString('pt-BR', opcoes)

    return <>
        <p className="autor">
            "{props.autor}"
        </p>
        <p className="data-postagem">
            Postada em : <strong>{data}</strong>
        </p>
    </>

}

export default Rodape;