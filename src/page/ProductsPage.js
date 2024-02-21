import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fecthAllProducts, fetchCategoryProducts } from "../asyncActions/products";
import { ROOT_URL } from "..";
import s from './ProductPage.module.css'
import FilterProducts from "../components/FilterProducts";
import { addItemAction } from "../store/cartReducer";
import Button from "../UI/Button/Button";

function ProductsPage({type}) {

    const {id} = useParams()
    const {category_title, products} = useSelector(store => store.products)

    const filtere_prodcuts = products.filter(el => el.isShow && el.isShowPrice)
    const dispatch = useDispatch()

    useEffect(() => {
        if (type !== 'category'){
            dispatch(fecthAllProducts(type))
        } else {
            dispatch(fetchCategoryProducts(id))
        }
    }, [id, type])


    function AddToCartHandle(e, obj){
        e.preventDefault()
        dispatch(addItemAction({...obj, count: 1}))
    }

    return (
      <div>
        <h2>{category_title}</h2>
        <FilterProducts type={type} id={id}/>
        <div className={s.products}>
            {filtere_prodcuts.map(elem => 
                <Link key={elem.id} to={'/products/'+elem.id}>
                    <div>
                        <img className={s.product_image} src={ROOT_URL+elem.image}/>
                        <p>{elem.title}</p>
                        <h3 style={{color: (elem.discont_price) ? 'red' : 'black'}}>{elem.price}</h3>
                        <Button  onClick={(e) => AddToCartHandle(e, elem)} text='Add to cart'/>
                    </div>
                </Link>

            )}
        </div>
      </div>
    );
  }
  
  export default ProductsPage;