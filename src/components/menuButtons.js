export default function MenuButtons(list) {

  const usedClass = "flex rounded-lg bg-cyan-700 h-[100px] w-auto justify-center items-center"

  return (
    <div className="flex rounded-lg bg-cyan-700 h-[80px] w-2/3 justify-center items-center">

      {/* <button key={item.title} className={`h-[100px] w-[100px] bg-white mx-[10px]`}>{ item.title }</button> */}
    {list.map((item) => (
    
      <button key={item.title} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-[5px]">
        {item.title}
      </button>
    
    ))}



    </div>
  )
}