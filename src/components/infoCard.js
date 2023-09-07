export default function InfoCard({ infos, toggler }) {

  return (
    <div
      onClick={ toggler }
      className={`${infos.isVisible? "": "hidden"} flex justify-evenly flex-wrap rounded-lg p-[20px] w-[300px] h-[300px] ${ infos.cor } my-[20px] mx-[10px]`}>
      <h2>{infos.title}</h2>

      <div className={`flex grid ${ infos.list.length > 3? "grid-cols-2": ""} justify-evenly flex-wrap`}>

        {infos.list && infos.list.map((item) => (
          <div key={item} className="rounded-lg mx-2">{ item }</div>
        ))}
        {/*coloquei margin horizontal pra quando tiver coluna espaçar */}
      </div>
      
    </div>
  )
}