import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './page/ProductsPage';
import HomePage from './page/HomePage';
import ProductInfoPage from './page/ProductInfoPage';
import CartPage from './page/CartPage';

function App() {
  return (
    <div>
      <div className='menu'>
        <Link to={'/'}>Home</Link>
        <Link to={'/products/all'}>All product</Link>
        <Link to={'/products/sales'}>Sales</Link>
        <Link to={'/category/1'}>Category 1</Link>
        <Link to={'/category/2'}>Category 2</Link>
        <Link to={'/category/3'}>Category 3</Link>
        <Link to={'/category/4'}>Category 4</Link>
        <Link to={'/category/5'}>Category 5</Link>
        <Link to={'/cart'}>Cart</Link>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>} handle={{

          }}/>
          <Route cr path='/products/all' element={<ProductsPage type='all'/>}/>
          <Route path='/products/sales' element={<ProductsPage type='sale'/>}/>
          <Route path='/category/:id' element={<ProductsPage type='category'/>}/>


          
          <Route path='/products/:id' element={<ProductInfoPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
