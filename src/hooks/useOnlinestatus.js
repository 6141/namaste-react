import { useEffect, useState } from "react"

export const useOnlineStatus = () => {
    const [online, setOnline] = useState(true);

    useEffect(() => {
      window.addEventListener('offline', ()=> {
        setOnline(false)
      })
      window.addEventListener('online', ()=> {
        setOnline(true)
      },[])

    //   return () => {
    // window.removeEventListener('online', ()=> {setOnline(false)});
    //     window.removeEventListener('offline', () => {setOnline(true)});
    //   };
    })

    return online
}