'use client'

import { Provider } from 'react-redux'
import store from '../lib/store'


export default function StoreProvider({ count, children }) {
//   const storeRef = useRef(null)
//   if (!storeRef.current) {
//     storeRef.current = makeStore()
//     storeRef.current.dispatch(initializeCount(count))
//   }

  return <Provider store={store}>{children}</Provider>
}