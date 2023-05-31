"use client";
import {useState} from 'react' 
import Dropdown from '../../components/Dropdown';

export default function DropdownPage() {
  const [selection, setSelection] = useState(null)
  const handleSelect = (option: any) =>{
    setSelection(option)
  }

  const options = [
    {label: 'Red',  value: 'red'},
    {label: 'Green',  value: 'green'},
    {label: 'Blue',  value: 'blue'}
  ];
  
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>home</h1>
      <Dropdown options={options} value={selection} onChange={handleSelect}/>
    </main>
  );
}
