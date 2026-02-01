import { useEffect } from "react";
import { FiX } from 'react-icons/fi';



const Model = (isOpen, onClose, title, children)=>{
useEffect(()=>{
    if(isOpen){
        document.body.style.overflow = 'hidden';
    } else{
        document.body.style.overflow = 'unset';
    }
    return ()=>{
        document.body.style.overflow = 'unset';
    }
},[isOpen]);
if(!isOpen) return null;

return(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="card relative z-10 w-full max-w-lg mx-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <FiX size={24} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
)}

export default Model;