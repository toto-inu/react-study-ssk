import { useState } from 'react'

type Props = {
  initialData: string
}

export const SSKInput = (props: Props) => {
  const [data, setData] = useState<string>(props.initialData)
  const handleChange = (e: any) => {
    setData(e.target.value)
  }
  return (
    <div key={data}>
      <input value={data} onChange={handleChange} style={{ border: '1px solid gray' }} />
    </div>
  )
}
