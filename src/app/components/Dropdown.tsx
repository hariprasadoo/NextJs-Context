import {useState, useEffect, useRef, use} from 'react'
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel'

const Dropdown: React.FC <OptionsItems>= ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef();
    
    useEffect(()=>{
        const handler = (event: any) =>{
            if(!divEl.current){
                return
            }
            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        };
        document.addEventListener('click', handler, true);
        return()=>{
            document.removeEventListener('click', handler);
        }
    },[]);

    const handleClick= ()=>{
        setIsOpen(!isOpen)
        // setIsOpen((currentIsOpen)=> !currentIsOpen)
    }
    const handleOptionClick= (option: any)=>{
        setIsOpen(false)
        onChange(option)
    }
    const renderOptions = options.map((option)=>{
        return <Panel className='flex ' onClick={()=>handleOptionClick(option)} key={option.value}>{option.label}</Panel>
    }) 
    return (
        <div ref={divEl} className='w-48 relative'>
          <Panel className='flex top-full' onClick={handleClick}>{value?.label || 'Select...'}<GoChevronDown className='text-center text-2xl'/></Panel>
          {isOpen && <div>{renderOptions}</div>}
        </div>
    )
}

export default Dropdown