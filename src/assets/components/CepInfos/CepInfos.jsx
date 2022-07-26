import './styles.css'

export function CepInfos (props){
    return(
        <div className='cardCep'>
            <span>Logradouro: {props.logradouro}</span>
            <span>Bairro: {props.bairro}</span>
            <span>Localidade: {props.localidade}</span>
            <span>UF: {props.uf}</span>
        </div>
    )
}