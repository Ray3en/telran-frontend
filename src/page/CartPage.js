import { useDispatch, useSelector } from "react-redux"
import { ROOT_URL } from ".."



function CartPage(){

    const {items} = useSelector(store => store.cart)
    const dispatch = useDispatch()


    return(
        <div className="cart_wrapper">
            
            {items.map(el => 
            <div className="cart_item">
                <img width={150} height={150} src={ROOT_URL+el.image}/>
                <div className="btns_count">
                    <button >-</button>
                    <input value={el.count}/>
                    <button>+</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default CartPage