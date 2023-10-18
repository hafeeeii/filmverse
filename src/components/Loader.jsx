import React from 'react'
import { ColorRing} from 'react-loader-spinner'

const Loader = () => {
  return (
   <div className='h-[100vh] flex items-center justify-center'>
<ColorRing />
</div>
  )
}

export default Loader