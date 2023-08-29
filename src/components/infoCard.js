export default function InfoCard(infos) {
  var cols
  if (infos.list.length > 3) cols = "grid-cols-2" 
  return (
    <div className={`flex justify-evenly flex-wrap rounded-lg p-[20px] w-[300px] h-[300px] ${ infos.classes }`}>
      <h2>{infos.title}</h2>

      <div className={`flex grid ${ cols } justify-evenly flex-wrap`}>

        {infos.list.map((item) => (
          <div key={item} className="rounded-lg mx-2">{ item }</div>
        ))}
        {/*coloquei marginal horizontal pra quando tiver coluna espaçar */}
      </div>
      
    </div>
  )
}