/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import Blank from "../components/template/Blank";
import ThemeLink from "../components/theme/ThemeLink";
import Button from "../components/ui/Button";
import CheckBox from "../components/ui/Checkbox";
import Input from "../components/ui/Input";
import Progress from "../components/ui/Progress";
import Select from "../components/ui/Select";
import Switch from "../components/ui/Switch";
import { nanoid16 } from "../lib/helper.mjs";

export default function Home() {

  const [ranID, setRanID] = useState("ranid")
  const [isOpenModal, setIsOpenModal] = useState(false)

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

  function clickOpenModal(){
    setIsOpenModal(true)
  }

  function onCloseModal(){
    setIsOpenModal(false)
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

      <br/>
      <br/> <Switch/> <button> default </button>
      <br/> <Switch round/> <button> default </button>
      <br/>
      <Select>
        <option value="0">Select car:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </Select>

      <br/>
      <br/><button onClick={clickOpenModal}> Modal </button>
      <br/>
      <br/><Progress value={10}/> <button> default </button>
      <br/><CheckBox/> <button> default </button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <label> Test </label>

      </Modal>
    </>
  )
}