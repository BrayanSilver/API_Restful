const ProductsModel = require('../models/products')

async function get(req, res) {

    const { id } = req.params

    const object = id? {_id: id} : {}

    const products = await ProductsModel.find(object)

    res.send(products)
}

async function post(req, res){

    const{
        name,
        brand,
        price
    } = req.body

    console.log(req.body)

    const register = new ProductsModel(
        {
            name,
            brand,
            price
        }
    )

    register.save()
    
    res.send({
        message: 'success'
    })

}

module.exports = {
    get,
    post
}