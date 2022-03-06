import MgmtDash from "../components/MgmtDash"
import Sidebar from "../components/Sidebar"
export default function Home() {
  
  return (
    <div className="bg-gray-100">

      <main className="flex">
        <Sidebar />

        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-9xl">
          <MgmtDash />
        </div>
        
      </main>

    </div>
  )
}