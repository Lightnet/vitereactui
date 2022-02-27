/*
  LICENSE: MIT
  Created by: Lightnet
*/

import React from "react";
import useAxios from "../hook/useAxios.mjs";

export default function BtnuseAxios(){

  async function clickTestAxios(){
    let data = await useAxios({
      method: 'get',
      url: '/json'
    })
    console.log(data);
  }

  return <button onClick={clickTestAxios}> Test useAxios </button>
}