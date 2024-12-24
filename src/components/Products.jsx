import { useProducts } from "../context/Product";
import { useAuth } from "../context/Auth";
import { Link } from "react-router-dom";

function Products() {
  const { products, loading } = useProducts();
  const { user } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        {user && (
          <Link
            to="/add-product"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add New Product
          </Link>
        )}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">No products available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder-image.jpg"; // Add a placeholder image
                    e.target.onerror = null;
                  }}
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>

                  <span className="text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded">
                    {product.category}
                  </span>
                </div>

                <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
