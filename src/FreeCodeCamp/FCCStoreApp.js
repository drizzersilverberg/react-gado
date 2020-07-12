import React from 'react'
import FCCProduct from './FCCProduct'

export default function FCCStoreApp() {
    const products = [
      {
        id: "1",
        name: "Pencil",
        price: 1,
        description: "lorem ipsum"
      },
      {
        id: "2",
        name: "Eraser",
        price: 2,
        description: "dolor sit amet"
      }
    ]
    return (
        <div>
            {products.map(item => 
                <FCCProduct key={item.id} product={item}/>
            )}
        </div>
    )
}
