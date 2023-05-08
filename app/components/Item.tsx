"use client"
import React, { useEffect, useState } from 'react';

interface Props {
    term: string;
    officialExplanation: string;
    unofficialExplanation: string;
    index?:number;
    outOf?:number;
}
interface Data {
    item: Props
}
const QuestionAndAnswer: React.FC<Data> = ({item}) => {
const [showOfficialExplanation, setShowOfficialExplanation] = useState<boolean>(false);

const {term, officialExplanation, unofficialExplanation} = item;

useEffect(()=>{
    setShowOfficialExplanation(false);
    },[item]     
    )
  return (
    <div className='p-2 border shadow group rounded-md inline-block cursor-pointer mt-2' onClick={()=>{
        setShowOfficialExplanation(!showOfficialExplanation);
    }}>
      <h2 className='text-3xl font-bold text-center'>{term}</h2>
      {
            showOfficialExplanation&&<div className='text-sm text-gray-500 text-center'>
                 <p className='py-2 my-5 transition-all opacity-100 duration-700 text-lg'>
              {officialExplanation}
                </p>
            
            <hr />
            <p className='py-2 my-5'>
            <strong>Context: </strong>{unofficialExplanation}
            </p>
            </div>
      }
        
    </div>
  );
};

export default QuestionAndAnswer;