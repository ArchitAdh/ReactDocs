const user = {
  name: "Archili mercedes",
  imageUrl:
    "https://images.unsplash.com/photo-1528837224361-a7f556d646b9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageSize: 90,
};

function MyApp() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`photo of ${user.name}`}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
