import { pc } from "../database/prismaClient";
import { Request, Response } from 'express'
export default class ProductServices {
  constructor() { }

  async list(request: Request, response: Response) {

    const products = await pc.product.findMany()
    return response.json(products)

  }


  async create(request: Request, response: Response) {


    const { name, description, brand, price } = request.body

    try {
      const product = await pc.product.create({
        data: {
          name, description, brand, price
        }
      })

      response.json(product)

    } catch (error) {
      return error
    }

  }
  async update(request: Request, response: Response) {

    const id = request.params.id
    const {name, description, price, brand} = request.body

    const newProduct = await pc.product.update({
      where : {id},
      data : {
        name: name,
        price: price,
        brand: brand,
        description: description,
      }
    })

    response.json(newProduct)

  }
  async delete(request: Request, response: Response) {

    const id = request.params.id

    try{
      
      await pc.product.delete({
        where : {id}
      })

      response.send("produto deletado!")

    }catch(error){  
      console.log(error)
      response.send("erro ao deletar o produto!")
    }

  }

}