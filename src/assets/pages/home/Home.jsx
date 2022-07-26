import './styles.css'
import { CepInfos } from '../../components/CepInfos/CepInfos'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import api from '../../services/api'

export default function App() {

  const [inputValue, setInputValue] = useState('')
  const [cep, setCep] = useState({})
  const [changeRender, setChangeRender] = useState(false)
  

  async function handleApiCep(){
      
      if(inputValue==''){
        alert('Digite o cep')
        return;
      }

      try{
        const response = await api.get(`${inputValue}/json`)
        const dados = await response.data

        if(dados.erro) {
          alert('O cep inserido não existe')
        }else{
          setCep(dados) 
          setChangeRender(true)
        }      

      }catch{
        alert('Erro ao buscar Cep')      
      }

    }
  

  
  return(
    <div className='container'>

      <header className='head'>
        <h2>Buscador de CEP</h2>
        <div className='entrada'>
          <input placeholder='Digite seu cep...' onChange={(e)=>setInputValue(e.target.value)} ></input>
          <button onClick={handleApiCep}>
            <FiSearch size='2em' style={{background: 'transparent'}}/>
          </button>
        </div>
      </header>

      {
        changeRender?
        <main className='cep'>

        <CepInfos logradouro={cep.logradouro} bairro={cep.bairro} localidade ={cep.localidade} uf={cep.uf}/>
        
        </main>
       : ''
      }
      
      
    </div>
  )
}


