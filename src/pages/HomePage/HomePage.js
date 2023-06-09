import React,{useEffect} from 'react';
import Slider from '../../components/Slider/Slider';
import './HomePage.scss'
import  Category  from '../../components/Category/Category';
import ProductList from '../../components/ProductList/ProductList';
import SingleCategory from '../../components/SingleCategory/SingleCategory'
import { useDispatch,useSelector } from 'react-redux';
import { fetchCategories,fetchProductsByCategory } from '../../store/slices/categorySlice';
import {fetchProducts} from '../../store/slices/productSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  const{data:categories,status: categoryStatus} = useSelector((state)=>state.category);

  const{catProductAll: productsByCategory, catProductAllStatus} =useSelector((state)=>state.category);

  const{data:products, status:productStatus} = useSelector((state)=>state.product);

  useEffect(() => {
   
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1,'all'));
    dispatch(fetchProductsByCategory(2,'all'))



  }, [])
  


  return (
    <div className='home-page'>
      <Slider/>
      <Category
        
        categories = {categories}
        status = {categoryStatus}

      />

      <ProductList
      products = {products}
      status = {productStatus}

      />

      {/* Category one product */}
      
      <section>
          {
            productsByCategory[0] && 
            <SingleCategory
              products={productsByCategory[0]}
              status = {catProductAllStatus}

            
            />
          }

      
      </section>

      {/* Category two products */}
      <section>
          {
            productsByCategory[1] && 
            <SingleCategory
              products={productsByCategory[1]}
              status = {catProductAllStatus}

            
            />
          }

      
      </section>

    </div>
  )
}

export default HomePage