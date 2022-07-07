import React, { useEffect } from 'react'
import { getPages } from '../../../api/index'

export default function Pages() {
  useEffect(() => {
    getPages().then((response) => {
      console.log(response)
    })
  }, [])
  return (
    <div className="h-screen w-screen bg-primary flex justify-center">
      Pages
    </div>
  )
}
