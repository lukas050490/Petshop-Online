import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"


function UserLayout() {

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "300vh" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default UserLayout