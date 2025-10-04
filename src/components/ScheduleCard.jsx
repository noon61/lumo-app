function ScheduleCard({ schedule }) {
  const wakeupTime = calcWakeupTime(schedule.time, schedule.prep)

  return (
    <div className="border rounded-lg p-4 mb-3 shadow">
      <h3 className="font-semibold">{schedule.title}</h3>
      <p>開始時間: {schedule.time}</p>
      <p>準備時間: {schedule.prep}分</p>
      <p>起床時間: {wakeupTime}</p>
    </div>
  )
}

function calcWakeupTime(time, prepMinutes) {
  const [h, m] = time.split(":").map(Number)
  const date = new Date()
  date.setHours(h, m, 0, 0)
  date.setMinutes(date.getMinutes() - prepMinutes)
  return date.toTimeString().slice(0,5)
}

export default ScheduleCard
