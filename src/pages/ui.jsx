/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React, { useState } from "react";
import Blank from "../components/template/Blank";
import ThemeLink from "../components/theme/ThemeLink";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { nanoid16 } from "../lib/helper.mjs";

export default function Home() {

  const [ranID, setRanID] = useState("ranid")

  async function clickApiFetch1(){
    let rep = await fetch('/json');
    let data = await rep.json()
    console.log(data);
  }

  async function clickApiFetch(){
    let rep = await fetch('/api/json');
    let data = await rep.json()
    console.log(data);
  }

  function clickRanID(){
    setRanID(nanoid16())
  }

  return (
    <>
      <h1>UI Page</h1>
      <ThemeLink/>
      <Blank></Blank>
      <br/>
      <br/><button onClick={clickApiFetch1}> Fetch Request 1 </button>
      <br/><button onClick={clickApiFetch}> Fetch Request 2 </button>
      <br/><button onClick={clickRanID}> Random ID: {ranID} </button>
      <br/>
      <br/>
      <button> default </button>
      <Button color="pri"> primary </Button>
      <Button color="sec"> secondary </Button>
      <Button color="ter"> tertiary </Button>
      <Button color="pos"> postive </Button>
      <Button color="neg"> negtive </Button>
      <br/>
      <button> default </button>
      <input />
      <Input />

    </>
  )
}