import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () =>{

  const [r, setR] = useState<string>("0")
  const [g, setG] = useState<string>("0")
  const [b, setB] = useState<string>("0")

  return (
    <div style={{
      backgroundColor: `rgb(${r}, ${g}, ${b})`
    }}>
      <span>R</span>
      <input type="range" max="250" value={r}
        onChange={
          e => setR(e.target.value)
        }
      />
      <input type="text" value={r} onChange={e => setR(e.target.value)}  />
      <br />
      <span>G</span>
      <input type="range" max="250" value={g}
        onChange={
          e => setG(e.target.value)
        }
      />
      <input type="text" value={g} onChange={e => setG(e.target.value)} />
      <br />
      <span>B</span>
      <input type="range" max="250" value={b}
        onChange={
          e => setB(e.target.value)
        }
      />
      <input type="text" value={b} onChange={e => setB(e.target.value)} />
    </div>
  )
}

export default Home