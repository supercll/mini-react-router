import React from 'react'
import { useSearchParams } from '../react-router-dom'
export default function User() {
  let searchParams = useSearchParams()
  console.log(searchParams.get('age'))
  return <div>User</div>
}
