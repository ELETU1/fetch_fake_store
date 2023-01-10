import React, {useState, useEffect} from 'react'

const App = () => {
  const[data, setData] = useState([])

  useEffect( ()=> {
      fakeStore(data)
  }, [])
  
  const fakeStore = async ()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    const jsonData = await res.json()
    setData(jsonData)
  }

  return (
    <>
      <h2>Fake API Store</h2>
      <div className="container">
        {data.map( (d) =>{
          return(
            <div className="box">
              <div className="content">
                <h5>{d.title}</h5>
                <p>{d.description}</p>
              </div>
              <img src={d.image} alt="" />
           </div>  
          )
        })}   
      </div>
    </>
  )
}

export default App;
