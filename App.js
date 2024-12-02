const products = [
  { title: "phone", id: 1, isMobile: true },
  { title: "desktop", id: 2, isMobile: false },
  { title: "tablet", id: 3, isMobile: true },
];

function MyApp() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isMobile ? "green" : "red",
      }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
