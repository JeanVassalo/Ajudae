import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'



export default function NewIncident(){
    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')
    const [value, setValue]=useState('')
    const userId=localStorage.getItem('userId')
    const history=useHistory()
    
    async function handleNewIncident(e){
        e.preventDefault()

        const data={
            title,
            description,
            value,
        }
        try {
            await api.post('incidents',data,{
                headers:{
                    Authorization:userId,
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('Erro no Cadastro ')
        }
    }

    return (
    
    <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Ajudae"/>
                <h1>Cadastrar nova Ajuda</h1>
                <p>Descreva detalhadamente seu pedido de Ajuda.</p>

                <Link className='back-link' to='/profile'>
                <FiArrowLeft size={16} color='#E02041'/>Voltar para home</Link>

            </section>

            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Título da Ajuda"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    />
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    />
                <input 
                    placeholder="Valor em Reais"
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                    />
                

                <button className="button" type='submit'>Cadastrar</button>
            </form>
        </div>
    </div>
    
    )

}