import { Button } from "@mui/material"

export function Card({ loading, catagory, name, clothingStyle, size, price }) {

  return (
    <div style={{border: '1px solid black', padding: '12px', margin: '12px', borderRadius: '8px', boxShadow: '2px 2px 1px #000'}}>
      <p>{catagory}</p>
      <div style={{borderBottom: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <p>{name}</p>
        <p>
          <select>
          {clothingStyle.map((item, i) => 
            <option key={i}>{item}</option>
          )}
          </select>
        </p>
        <select>
          {size.map((item, i) => 
            <option key={i}>{item}</option>
          )}
        </select>
        <p style={{fontWeight: 'bold'}}>${price}</p>
      </div>
      <Button disabled={loading}>Add</Button>
    </div>
  )
}