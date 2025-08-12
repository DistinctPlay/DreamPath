import { useEffect, useState } from 'react'
import { auth, getMemberCount } from '../lib/firebase'

export default function Dashboard(){
  const [user, setUser] = useState(null)
  const [count, setCount] = useState(null)
  useEffect(()=>{
    const unsub = auth.onAuthStateChanged(u=> setUser(u))
    getMemberCount().then(c=> setCount(c))
    return ()=> unsub()
  },[])

  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Community Dashboard</h2>
      <p className="text-slate-700">Total members: <strong>{count === null ? '—' : count}</strong></p>
      {user ? (
        <div className="border rounded p-4">
          <h3 className="font-semibold">Your Profile</h3>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-sm">Sign in to see your profile. Use the sign-in button in the top-right.</p>
      )}
    </section>
  )
}
