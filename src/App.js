import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import {Card} from "./components/Card";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [allData, setAllData] = useState(true);

  console.log('data: ', data);

  const getData = async (catagory) => {
    setLoading(true);
    const response = await fetch(`http://localhost:3000/${catagory}`);
    const serverResponse = await response.json();
    setLoading(false);
    console.log('sort: ', serverResponse.sort((a, b) => b.price - a.price));
    setData(serverResponse);
    return serverResponse;
  };

  useEffect(() => {
    const getInitialData = async () => {
      setLoading(true);
      const shirtResponse = await fetch(`http://localhost:3000/shirts`);
      const shirtServerResponse = await shirtResponse.json();
      const pantsResponse = await fetch(`http://localhost:3000/pants`);
      const pantsServerResponse = await pantsResponse.json();
      console.log('pantsServerResponse: ', pantsServerResponse);
      setLoading(false);
      setData([...shirtServerResponse, ...pantsServerResponse]);
    };

    if(allData) {
      getInitialData();
    }
  }, [allData]);


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h1>Aaron's clothing store</h1>
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={async () => {
            const serverResponse = await getData(input);
            setAllData(false);
            setData(serverResponse);
          }}
            variant="contained">
            Submit
          </Button>
        <Button onClick={() => setAllData(true)}>X</Button>
        </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      {data[0] && 
        data.map((item, iterator) => 
          <Card loading={loading} name={item.name} price={item.price} size={item.sizes} clothingStyle={item.styles} key={iterator} />
        )
      }
      </div>
    </div>
  );
}
