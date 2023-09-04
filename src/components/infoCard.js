export default function InfoCard(infos) {
  const localInfo = {
    cols:""
  }
  
  // localInfo.cols = `grid-cols-${(infos.list.length / 4)}`
  
  if (infos.list.length > 3) localInfo.cols = "grid-cols-2"
  const toggler = `${infos.isVisible? "": "hidden"}` 
  return (
    <div className={`flex justify-evenly flex-wrap rounded-lg p-[20px] w-[300px] h-[300px] ${ infos.classes } my-[20px] mx-[10px]`}>
      <h2>{infos.title}</h2>

      <div className={`flex grid ${ localInfo.cols } justify-evenly flex-wrap`}>

        {infos.list.map((item) => (
          <div key={item} className="rounded-lg mx-2">{ item }</div>
        ))}
        {/*coloquei margin horizontal pra quando tiver coluna espaçar */}
      </div>
      
    </div>
  )
}