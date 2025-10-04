import ScheduleCard from '../components/ScheduleCard'

const dummySchedules = [
  { id: 1, title: "ゼミ発表", time: "10:00", prep: 30 },
  { id: 2, title: "バイト", time: "17:00", prep: 60 }
]

function ScheduleList() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">スケジュール一覧</h2>
      {dummySchedules.map(s => (
        <ScheduleCard key={s.id} schedule={s} />
      ))}
    </div>
  )
}

export default ScheduleList
