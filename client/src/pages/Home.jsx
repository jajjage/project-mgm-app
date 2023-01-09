import AddClientModel from "../components/AddClientModel";
import Client from "../components/Client";
import Projects from "../components/Projects";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-3'>
        <AddClientModel />
        <AddProjectModal />
      </div> 
      <Projects />
      <hr />
      <Client />
    </>
  )
}
