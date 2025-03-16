'use client';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react'
import tabdata from '../../../public/data/boldSteps.json';
export default function BoldSteps() {
    const [activeTab, setActiveTab] = useState();
    const tab=(item)=>{
        setActiveTab(item);
    }
    useEffect(() => {
        tab('hello');
    }, [])

    console.log(tabdata);
    
  return (
    <div>
      
        <div className="flex justify-center items-center">
            <div>
                <Image src="/images/Group 1.png" width={100} height={100} alt="image" />
            </div>
            <div></div>
        </div>



    </div>
  )
}
