import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductDescription } from "../asyncActions/products"
import { useParams } from "react-router-dom"
import { ROOT_URL } from ".."
import { changeCountItem } from "../store/productInfoReducer"
import { addItemAction } from "../store/cartReducer"
import Button from "../UI/Button/Button"


function ProductInfoPage(){

    const dispatch = useDispatch()
    const product = useSelector(store => store.productInfo)
    const {items} = useSelector(store => store.cart)
    const {id} = useParams()

    console.log(items)

    useEffect(()=>{
        dispatch(fetchProductDescription(id))  
    }, [dispatch])

    return(
        <div>
            <h2>{product.title}</h2>
            <img width={500} height={500} src={ROOT_URL+product.image}/>
            <div className="btns_count">
                <button onClick={() => dispatch(changeCountItem(-1))}>-</button>
                <h2>{product.count}</h2>
                <button onClick={() => dispatch(changeCountItem(1))}>+</button>
            </div>
            <Button onClick={() => dispatch(addItemAction(product))} text='Add to cart'/>
        </div>
    )
}

export default ProductInfoPage