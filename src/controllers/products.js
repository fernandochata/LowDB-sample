import { getConnection } from '../database/db.js'
import { v4 } from 'uuid'

export const getProducts = (req, res) => {
  const products = getConnection().data.products
  res.json(products)
}

export const getProduct = (req, res) => {
    const product = getConnection().data.products.find(
      (prod) => prod.id === req.params.id
    )
    if (!product) res.sendStatus(404)
    res.json(product)
  }

export const createProduct = async (req, res) => {
  const newProduct = {
    id: v4(),
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
  }
  try {
    const db = getConnection()
    db.data.products.push(newProduct)
    await db.write()
    res.json(newProduct)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export const updateProduct = async (req, res) => {
  const { name, price, stock, description } = req.body

  try {
    const db = getConnection()
    const product = db.data.products.find((prod) => prod.id === req.params.id)
    if (!product) return res.sendStatus(404);
    product.name = name
    product.price = price
    product.stock = stock
    product.description = description
    db.data.products.map((prod) => (prod.id === req.params.id ? product : prod))
    await db.write()
    res.json(product)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

export const deleteProduct = async (req, res) => {
  const db = getConnection()
  const product = db.data.products.find((prod) => prod.id === req.params.id)
  if (!product) res.sendStatus(404)
  const newProducts = db.data.products.filter((prod) => prod.id !== req.params.id)
  db.data.products = newProducts
  await db.write()
  return res.json(product)
}