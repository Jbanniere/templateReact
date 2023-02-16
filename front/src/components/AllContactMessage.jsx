import {useEffect, useState} from "react"
import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import {formatDate} from "../tools/date.js"

const AllContactMessage = () => {
    const [allContact, setAllContact] = useState([])

    // Récupère tous les messages de contact
    useEffect(() => {
        axios.get(`${BASE_URL}/getAllContactMessage`)
            .then(res => setAllContact(res.data.result.result))
            .catch(err => console.log(err))
            
    },[])
    
   
    // Valide le changement d'état de la demande
    const submit = (index) => {
        // on fait du destructuring pour recuperer l'id et l'etat 
        const {id, etat} = allContact[index]
         axios.post(`${BASE_URL}/updateContactEtat`,{etat,id})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    console.log(allContact)
    
    // Supprime un message
    const deleteContact = (id) => {
        axios.post(`${BASE_URL}/deleteContactMessage`)
        .then(res => setAllContact(allContact.filter((e)=> e.id !== id)))
    }
    
    const updateEtat = (index, etat) => {
        // on fait une copie de tous les messages de contact
        const contact = [...allContact]
        // on assigne le nouvel état au format number
        contact[index].etat = parseInt(etat)
        // on met a jour tous les contacts dans le state
        setAllContact([...contact])
    }
    
    return(
        <div>
            <h1>Demandes de contact</h1>
            {allContact.map((demande,i)=> {
            return(
            <div key={i}>
                <h2>{formatDate(demande.date)} Objet : {demande.objet}</h2>
                <p>Message : {demande.message}</p>
                <p>Coordonnées : {demande.nom} {demande.prenom}</p>
                <p>Email :{demande.email}</p>
                {/* on envoie l'index et la valeur du contact modifié */}
                <select name="etat" onChange={(e) => updateEtat(i,e.target.value)} value={demande.etat}>
            		<option value={0}>Demande Non Traitée</option>
            		<option value={1}>Demande Traitée</option>
    		    </select>
    		    {/* On envoie l'index du contact modifié */}
    		    <button onClick={() => submit(i)}>Valider</button>
                <FontAwesomeIcon icon={faTrash} color={ 'red' }  onClick={() => deleteContact(demande.id)} />
            </div>
           )
           })}
        </div>
        )
}

export default AllContactMessage

 /* <table>
                        <thead>
                            <tr>
                                <th colSpan="7">Demandes de contact</th>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <th>Message</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Etat</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.date}</td>
                                <td>{user.message}</td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.email}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>*/