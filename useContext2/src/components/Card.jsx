import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
