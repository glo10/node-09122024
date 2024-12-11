import { connect, Schema, model } from 'mongoose'
import { parameters } from './config/parameters.js'
const { id, password, cluster, bdd } = parameters
const db = connect(`mongodb+srv://${id}:${password}@${cluster}/${bdd}`)
db.then(() => console.log('Connexion OK'))
.catch((error) => console.error('Connexion KO', error.message))

const productSchema = Schema({
  reference: { type: String, required: true },
  name: { type: String, required: true },
  price : { type: Number, required: true },
  description: { type: String }
})
const ProductModel = model('Product', productSchema)

const product1 = new ProductModel({ reference: 'ref1', name: 'name1', price: 50 })
product1.save()
.then(data => {
  console.log('data', data)
})
.catch(error => console.error('erreur insertion', error))

ProductModel.find({})
.then(products => console.log('products', products))
.catch(error => console.error('erreur récup produits', error))