//request middleware
module.exports={
    searchBooks: async(req,res) => {
        const value = req.query.search;
        const db =req.app.get('db');
        
        
        await 
        db.search_db(value)
        .then((data)=>{
            if(data.length === 0){
            return res.status(200).send('book not found')
            }else{
            res.status(200).send(data)
            }
        })
        .catch((err)=>{
            console.error( `Error occurred` + err);
        })

    },
}