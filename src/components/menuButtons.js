export default function MenuButtons({ stateList }) {

  const usedClass = "flex rounded-lg bg-cyan-700 h-[100px] w-[${stateList.length*100}]px justify-center items-center"
  
  
  
  return (
    <div className={`flex rounded-lg bg-cyan-800 h-[80px] w-auto justify-center items-center`}>

      {/* <button key={item.title} className={`h-[100px] w-[100px] bg-white mx-[10px]`}>{ item.title }</button> */}
      {stateList.map((item) => (
      
        <button key={item.title} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-[5px]">
          {item.title}
        </button>
      
      ))}

    </div>
  )
}