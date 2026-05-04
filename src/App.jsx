import React from "react";


const App = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleNext = () => {
    if (currentIndex + imagesPerPage < products.length) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - imagesPerPage >= 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };

  const displayedImages = products.slice(currentIndex, currentIndex + imagesPerPage);

  return (
    <div>
      <h1>Fetching products from API</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {displayedImages.map((product) => (
          <div key={product.id} style={{ margin: "10px" }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: "150px", height: "150px" }} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIndex + imagesPerPage >= products.length}>
        Next
      </button>
    </div>
  );
};
//qwerrttt

export default App;
