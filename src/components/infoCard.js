export default function InfoCard(infos) {
  return (
    <div className={`rounded-lg p-[20px] w-[300px] h-[300px] ${ infos.classes }`}>
      <h2>{infos.title}</h2>
      {infos.list.map((item) => (
        <div key={item}>{ item }</div>
      ))}
      
    </div>
  )
}