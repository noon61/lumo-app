import { useState } from 'react'

function ScheduleInput() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [prep, setPrep] = useState(30)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`追加: ${title}, ${time}, 準備 ${prep}分`)
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h2 className="text-xl font-bold">スケジュール追加</h2>
      <input 
        type="text" 
        placeholder="タイトル"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <input 
        type="time" 
        value={time}
        onChange={e => setTime(e.target.value)}
        className="border p-2 w-full"
      />
      <input 
        type="number" 
        value={prep}
        onChange={e => setPrep(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="px-4 py-2 bg-pink-400 text-white rounded">
        登録
      </button>
    </form>
  )
}

export default ScheduleInput
