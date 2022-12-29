import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Product = ({ product }) => {
    const options = {
        edit: false,
        color: 'rgba(20,20,20,0.1',
        activeColor: 'tomato',
        value: product.ratings,
        isHalf: true,
        size: window.innerHeight < 600 ? 20 : 25,
    };

    return (
        <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg bg-white min-w-[350px]">
                <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="flex items-center justify-center"
                >
                    <img
                        className="rounded-t-lg max-h-52 "
                        src={product.images[0].url}
                        alt={product.name}
                    />
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
                    <p className="text-gray-700 text-base mb-4">{product.description}</p>
                    <div className="flex justify-between items-center pb-2">
                        <ReactStars {...options} />
                        <span>({product.numOfReviews} reviews)</span>
                    </div>
                    <p className=" pb-2">{product.price}</p>
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Buy Now
                        </button>
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Add to Card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
