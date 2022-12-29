import React, { useEffect } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/productAction';
import ProductLoader from '../common/Loader/ProductLoader';
const product = {
    name: 'Blue Shirt',
    price: '$300',
    _id: 'jsgfjgf',
    images: [{ url: 'https://m.media-amazon.com/images/I/61KNBTw4K8S._AC._SR360,460.jpg' }],
};
const Products = () => {
    const dispatch = useDispatch();
    const { products, loading, error, productCount } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <ProductLoader />
            ) : (
                <div className="py-5">
                    <h1 className="text-center mx-auto text-5xl text-slate-800 border-b-2 border-slate-800 w-fit ">
                        Featured Products
                    </h1>
                    <div className="my-5 py-5 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-4 lg:gap-4 justify-center mx-auto w-full">
                        {products?.map((product) => (
                            <Product product={product} key={product._id} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;
