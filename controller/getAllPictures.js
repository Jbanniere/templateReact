import BDD from '../model/BDD.js'
import Pictures from '../model/Products.js'

export default async (req,res) => {
    const {url, product_id, caption, id} = req.body
    
    try {
        const myBDD = new BDD()
        const picture = new Pictures(myBDD)
        const allPictures = await picture.getAllPicture({url, product_id, caption, id})
        res.json({allPictures})
        
        
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }

}