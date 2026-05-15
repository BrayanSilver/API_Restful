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


async function put(req, res){

    const{id} = req.params

    const product = await ProductsModel.findByIdAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'success',
        product
    })







    /*

    const {id} = req.params
    const product =await ProductsModel.findOne({_id: id})
    
    await product.updateOne(req.body)

    res.send({
        message: 'success',
        product
    })
        */
}

async function remove(req, res){
    const {id} = req.params

    const remove = await ProductsModel.deleteOne({_id: id})

    let message = 'sucess'

    if(!remove.ok){
        message: 'error'
    }

    res.send({
        message: 'success'
    })
}


module.exports = {
    get,
    post,
    put,
    remove
}