import {Fragment} from 'react'
import {BASE_URL} from "../tools/constante.js"
import axios from 'axios'
// import {AppContext} from './reducer/reducer.js'

const UploadFile = () => {
    // const [state, dispatch] = useContext(AppContext)
    
    const submit = (e) => {
        e.preventDefault()
        const username = "Pseudo"
        const dataFile = new FormData();
        const files = {...e.target.avatar.files};
        
        
        // ajouter d'autre input au formulaire
        dataFile.append('username', username)
        
        // L'image
        dataFile.append('files', files[0], files[0].name)
        
        axios.post(`${BASE_URL}/uploadFile`, dataFile)
        .then((res)=> {
            res.data.response && console.log('succesfully upload');
        })
        .catch((err) => {
            console.log(err)
        })
    } 
    
    return (
        <Fragment>
            <h1>Ajouter/Modifier l'avatar</h1>
            <form onSubmit={submit} encType="multipart/form-data"> {/*encType = on lui indique qu'il va avoir un upload de fichier à gérer*/}
                <label name='avatar'>
                    <input type='file' name='avatar'/>
                    <input type='submit' value='Submit'/>
                </label>
            </form>
        </Fragment>
    )
}

export default UploadFile