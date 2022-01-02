import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Dropdown from "./component/DropDown";
import Header from "./component/Header";
import Search from "./component/Search";
import Translate from "./component/Translate";
import Route from "./component/Route"


const items = [
    {
        title:'what is react? 1',
        content:'react is framework 1'
    },{
        title:'what is react? 2',
        content:'react is framework 2'

    },{
        title:'what is react? 3',
        content:'react is framework 3'

    }
]

const options = [
    {
        label:'color red',
        value:'red'
    },
    {
        label:'color green',
        value:'green'
    },
    {
        label:'color yellow',
        value:'yellow'
    }
]
export default () =>{
    const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}