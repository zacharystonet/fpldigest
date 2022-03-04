import PlayerTeam from "../components/PlayerTeam"
import Sidebar from "../components/Sidebar"
export default function Home() {
  
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">

      <main className="flex">
        <Sidebar />
        <PlayerTeam />
      </main>

    </div>
  )
}