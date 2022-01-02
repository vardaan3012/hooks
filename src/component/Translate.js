import React,{useState} from 'react';
import Convert from './Convert';
import Dropdown from './DropDown';

const options = [
    {
        label:'hindi',
        value:'hi'
    },
    {
        label:'afrikaans',
        value:'af'
    },
    {
        label:'arabic',
        value:'ar'
    }
];

const Translate = () =>{
    const [language,setLanguage]=useState(options[0]);
    const [text,setText]=useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown
            label="select a language"
            selected={language}
            onSelectedChange={setLanguage}
            options={options}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert 
            language={language}
            text={text}/>
        </div>

    );

}

export default Translate;