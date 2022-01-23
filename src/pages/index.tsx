import type { NextPage } from "next";
import { useState } from "react";
import Input from "../components/Input"

const Home: NextPage = () => {

  const [r, setR] = useState<string>("0")
  const [g, setG] = useState<string>("0")
  const [b, setB] = useState<string>("0")

  return (
    <div style={{
      backgroundColor: `rgb(${r}, ${g}, ${b})`
    }}>

      <Input
        name="R"
        value={r}
        set={setR}
      />
      <br />
      
      <Input
        name="G"
        value={g}
        set={setG}
      />
      <br />

      <Input
        name="B"
        value={b}
        set={setB}
      />
      <br />
      
    </div>
  )
}

export default Home