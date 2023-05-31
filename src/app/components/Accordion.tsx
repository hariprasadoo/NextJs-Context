import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft, GoChevronRight } from "react-icons/go";

const According: React.FC <AccordingItems>= ({items}) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex: React.SetStateAction<number>)=>{
      setExpandedIndex((currentExpandedIndex):any=>{
        if (currentExpandedIndex===nextIndex){
          return -1;
        } else{
          return nextIndex
        }
      })

    }
    const renderedItems = items.map((item, index) => {
      const isExpanded = index === expandedIndex;
      const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>
      return (
        <div key={item.id}>
          <div className='flex p-3 w-screen bg-gray-700 border-b justify-between items-center cursor-pointer' onClick={()=>handleClick(index)}>{item.label}{icon}</div>
          {isExpanded && <div className='border-b p-5'>{item.content}</div>}
        </div>
      );
    });
  
    return <div className='border-x border-t rounded'>{renderedItems}</div>;
}

export default According