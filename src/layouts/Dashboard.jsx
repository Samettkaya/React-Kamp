import React from 'react'
import ProductList from '../pages/ProductList'
import CartSummary from './CartSummary'
import Categories from './Categories'
import Navi from './Navi'


export default function Dashboard() {
    return (
        <div>
            <div>
              <Navi/>
              <div>
              <CartSummary/>
              </div>
            </div>
            <div>
             <Categories/>
            </div>
            <div>
              <ProductList/>
            </div>
        </div>
    )
}
