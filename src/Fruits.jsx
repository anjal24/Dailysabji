import "./header.css";

const Fruits = () => {
  const fruitsData = [
    {
      id: 1,
      name: "Apple ",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.kzo22vGPqcf7d5w_QJhrfQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      name: "Banana ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    },
    {
      id: 3,
      name: "Mango ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
    },
    {
      id: 4,
      name: "Orange ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
    },
    {
      id: 5,
      name: "Strawberry",
      image:
        "https://img.freepik.com/free-photo/strawberry-isolated-white-background_1232-1974.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 6,
      name: "Pineapple",
      image:
        "https://m.media-amazon.com/images/I/71bNsWlkyeL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 7,
      name: "Watermelon",
      image:
        "https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-04/watermeloen_2.jpg?itok=CCYHLr5M ",
    },
    {
      id: 8,
      name: "Papaya ",
      image:
        " https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hJ5DpNTt0oKjZMIHYV6gUHTntB2zIs_78dPKiuDUXgE=",
    },
    {
      id: 9,
      name: "Plum ",
      image:
        " https://www.shutterstock.com/image-photo/plum-cut-half-isolated-on-260nw-2582707555.jpg",
    },
    {
      id: 10,
      name: "Kiwi ",
      image:
        " https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
    },
  ];
  return (
    <div className="fruit-container">
      <h1>Fruits</h1>
      {fruitsData.map((item, index) => (
        <div
          key={item.id}
          className="fruit-item"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <h2>{item.name}</h2>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Fruits;
