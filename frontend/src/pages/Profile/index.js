import React, {useEffect,useState} from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'
import api from '../../services/api'

export default function Profile(){
    const userId=localStorage.getItem('userId')
    const userName=localStorage.getItem('userName')
    
    const [incidents,setIncidents]=useState([])

    const history=useHistory()
    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization: userId, 
            }
        }).then(response=>{
            setIncidents(response.data)
        })
    },[userId])

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: userId,
                }
            })
        setIncidents(incidents.filter(incidents=>incidents.id !== id))
        }catch(err){
            alert('Erro')
        }
    }

    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Ajudae"/>
                <span>Olá, {userName}</span>

                <Link className="button" to="/incidents/new">Criar pedido de Ajuda</Link>
                <button onClick={handleLogout} type="button">
                <FiPower  size={18} color="#E02041"></FiPower>
                </button>
           
            </header>

            <h1>Pedidos de Ajuda</h1>
            <ul>
               {
                  incidents.map(incident=>(
                    <li key={incident.id}>
                    <strong>Ajuda:</strong>
                    <p>{incident.title}</p>
                    <strong>Descrição:</strong>
                    <p>{incident.description}</p>
                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'})
                    .format(incident.value)}</p>
                    <button onClick={()=>handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                    </li>
                  ))
               }
               
            </ul>


        </div>
     )

}