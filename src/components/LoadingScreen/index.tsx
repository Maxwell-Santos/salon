
export function LoadingScreen() {

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-loading-screen flex justify-center items-center gap-8"
    >
      <div className="aspect-square w-[15px] h-[15px] bg-white shadow-sm rounded-full grid place-content-center">
        <div className="animate-ping bg-white aspect-square w-[20px] rounded-full"></div>
      </div>
      <div className="aspect-square w-[15px] h-[15px] bg-white shadow-sm rounded-full grid place-content-center">
        <div className="animate-ping bg-white aspect-square w-[20px] rounded-full"></div>
      </div>
      <div className="aspect-square w-[15px] h-[15px] bg-white shadow-sm rounded-full grid place-content-center">
        <div className="animate-ping bg-white aspect-square w-[20px] rounded-full"></div>
      </div>
    </div>
  )
}
