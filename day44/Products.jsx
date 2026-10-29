export default function Products()
{
    const products = [
    {
      id: 1,
      name: "Mobile",
      price: 25000,
      rating: 4.5,
      image: "https://tse3.mm.bing.net/th/id/OIP.Pwg7iAv5-xIEoqmER_JnigAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 2,
      name: "Headphones",
      price: 1500,
      rating: 4.5,
      image: "https://tse3.mm.bing.net/th/id/OIP.t8cjDKOGDWdwAEbpu8FlJgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 3,
      name: "watch",
      price: 1399,
      rating: 4.8,
      image: "https://tse4.mm.bing.net/th/id/OIP.Ml8z3dZYtlyuI4QxFKgnogHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 4,
      name: "Home audio system",
      price: 1999,
      rating: 4.3,
      image: "https://tse4.mm.bing.net/th/id/OIP.ykXcyLrBwJ46A08BsyFOZwHaE3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 5,
      name: "sunglasses",
      price: 1000,
      rating: 4.5,
      image: "https://tse4.mm.bing.net/th/id/OIP.CNo-kShfDHnnCDzH8Bt-BwHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 6,
      name: "Laptop",
      price: 69999,
      rating: 4.4,
      image: "https://tse4.mm.bing.net/th/id/OIP.pLkz2kXu8wy0FPxjy5U1OwHaFk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-52 object-cover"/>
                <div className="p-5">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-green-600 text-lg font-semibold mt-2">Rs.{product.price}</p>

                    <p className="text-yellow-600 mt-2">{product.rating} / 5</p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-800">Add to Cart</button>
                </div>
            </div>
           ))}   
        </div>
    </div>
  )
}
