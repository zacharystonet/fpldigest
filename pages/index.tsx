import PlayerTeam from "../components/PlayerTeam"
import Sidebar from "../components/Sidebar"
export default function Home() {
  
  return (
    <div className="bg-white h-screen overflow-hidden">

      <main className="flex">
        <PlayerTeam />
        <Sidebar />
      </main>

    </div>
  )
}