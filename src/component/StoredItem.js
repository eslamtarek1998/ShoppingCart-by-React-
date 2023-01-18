import React from 'react'
import {Card,Button} from 'react-bootstrap'
import FormatCurrency from './FormatCurrency'
import {useShoppingCartContext} from '../context/ShoppingCartContext'


export default function StoredItem({id,price,name,imgUrl}) {

  const {getItemsQuantity,increaseCartQuantity,decreaseCartQuantity,removeItemFromCart}=useShoppingCartContext()


    const quantity=getItemsQuantity(id)
  return (
    <Card className='h-100'>
        <Card.Img src={imgUrl} variant="top" style={{height:"200px",objectFit:'cover'}}></Card.Img>

        <Card.Body className="d-flex flex-column">

        
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>



        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=>increaseCartQuantity(id)} >
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity} in cart</span>
                </div>
                <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={()=>removeItemFromCart(id)}
                variant="danger"
                size="sm"
                
              >
                Remove
              </Button>
            </div>
          )}
        </div>


        </Card.Body>
      
    </Card>
  )
}
