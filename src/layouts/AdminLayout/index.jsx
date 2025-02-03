import { Outlet, Navigate } from "react-router-dom"
import SideNavAdmin from "../../components/SideNavAdmin";
import {Container} from "./styles"


function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(localStorage.getItem("petshop:userData"));

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  )
}

export default AdminLayout