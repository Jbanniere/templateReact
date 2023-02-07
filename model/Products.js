class Products {
    constructor(bdd) {
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery
    }
    
////////// CREATE ////////////

    async addProduct({name, description, price_solo, price_hs}) {
        
        if(!name || !description || !price_solo || !price_hs){
            return null
        }
        const sql = 'INSERT INTO products (name, content, price_solo, price_hs VALUES (?,?,?,?)'
        const paramsSql = [name, description, price_solo, price_hs]
        
        try {
            const result = await this.asyncQuery(sql, paramsSql)
            return {result}
        } catch (err) {
            console.log(err)
            return err
        }
    }
    
    

/////////// UPDATE //////////

    // Sélectionner un produit par son ID
    async getProductById ({id}) {
        const sql = 'SELECT * FROM products WHERE id = ?'
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }

     async updateProduct({name, description, price_solo, price_hs, id}){
        const sql = "UPDATE products SET name = ?, description = ?, price_solo = ?, price_hs = ? WHERE id = ?"
        const paramsSql = [name, description, price_solo, price_hs, id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
}

export default Products