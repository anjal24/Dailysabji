import "./header.css";

const Vegetables = () => {
  const VegetablesData = [
    {
      id: 1,
      name: "Tomato",
      image:
        "https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/2024/11/04124933/tomato.jpg",
    },
    {
      id: 2,
      name: "Potato ",
      image: "https://cdn.britannica.com/89/170689-131-D20F8F0A/Potatoes.jpg",
    },
    {
      id: 3,
      name: "Brinjal ",
      image:
        "https://th.bing.com/th/id/OIP.mtpuRRqshEkPe4ADg6pD_gHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 4,
      name: "Cauliflower",
      image:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/282/282844/cauliflower-is-rich-in-nutrients-and-fiber.jpg",
    },
    {
      id: 5,
      name: "Broccoli",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMAfkRPMp8820fNybILPz16Ymweg_XkiimA&s",
    },
    {
      id: 6,
      name: "Pea",
      image:
        "https://i.pinimg.com/236x/45/d0/41/45d041b9d1e2bb6ded1caf23c2a1df5b.jpg",
    },
    {
      id: 7,
      name: "onion",
      image: "https://4.imimg.com/data4/MF/FB/MY-10877716/fresh-onion.jpg",
    },
    {
      id: 8,
      name: "Capsicum",
      image: "https://5.imimg.com/data5/LI/PW/ER/SELLER-17046373/capsicum.jpg",
    },
    {
      id: 9,
      name: "Radish",
      image:
        "https://p.kindpng.com/picc/s/780-7804914_mula-vegetable-hd-png-download.png",
    },
    {
      id: 10,
      name: "Corn",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmU824N_BRAgtN-xRQAluGq3CFTWfAV6gqg&s",
    },
  ];
  return (
    <div className="vegetables-container">
      <h1>Vegetables</h1>
      {VegetablesData.map((item, index) => (
        <div
          key={item.id}
          className="vegetables-item"
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
export default Vegetables;
