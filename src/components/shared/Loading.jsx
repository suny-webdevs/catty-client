import { SyncLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <SyncLoader
        color="#0014ff"
        size={20}
      />
    </div>
  )
}

export default Loading
