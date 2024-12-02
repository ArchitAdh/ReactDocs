const products = [
  { title: "phone", id: 1 },
  { title: "laptop", id: 2 },
  { title: "tablet", id: 3 },
];

function MyApp() {
  const listItems = products.map((product) => (
    <li key={product.id}> {product.title}</li>
  ));
  return <ul>{listItems}</ul>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
