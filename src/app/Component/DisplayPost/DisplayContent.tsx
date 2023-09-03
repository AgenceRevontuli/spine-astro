// @ts-nocheck
'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DisplayIntro({ variantes }) {
    const [varId, setVarId] = useState(0)

    const handleLeft = () => {
      if (varId === 0) {
          setVarId(0)
      } else {
          setVarId(varId - 1)
      }
  }

  const handleRight = () => {
      if (varId === 2) {
          setVarId(2)
      } else {
          setVarId(varId + 1)
      }
  }

  return (
    <div className="my-8 flex justify-between">
        <button onClick={handleLeft} className={`${varId === 0 ? 'opacity-20' : 'opacity-1'}`}><ChevronLeft /></button>
        <div className="w-8/12">
          <p id={0} className={`${varId === 0 ? "" : "hidden"}`} >{variantes.variante1.content}</p>
          <p id={0} className={`${varId === 1 ? "" : "hidden"}`}>{variantes.variante2.content}</p>
          <p id={0} className={`${varId === 2 ? "" : "hidden"}`}>{variantes.variante3.content}</p>
        </div>
        <button onClick={handleRight} className={`${varId === 2 ? 'opacity-20' : 'opacity-1'}`}><ChevronRight /></button>
    </div>
  )
}
