'use client'

import { Suspense } from 'react'
import Scene3D from './Scene3D'

export default function Scene3DWrapper() {
  return (
    <Suspense fallback={<div>Loading 3D Scene...</div>}>
      <Scene3D />
    </Suspense>
  )
} 