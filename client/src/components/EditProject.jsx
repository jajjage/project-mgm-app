import { useState } from "react"
import { useMutation } from "@apollo/client"
import { UPDATE_PROJECT } from "../mutations/projectMutations"
import { GET_PROJECTS } from "../queries/projectQueries"
import { FaEdit } from "react-icons/fa"


export default function EditProject({ project }) {

  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");
    
    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { id: project.id, name, description, status },
        refetchQueries: [{ query: GET_PROJECTS, variables: { id: project.id } }]
    })
  const onSubmit = (e) => { 
        e.preventDefault();
        
        if(name === '' || description === '' || status === '') {
            alert('Please fill in all fields');
            return;
        }
            
        updateProject(name, description, status);

        // setName('');
        // setDescription('');
        // setStatus('');
        }
    return (
     <div className="mb-5">
      <h3>Project Detail</h3>
        <form onSubmit={onSubmit}>
            <div className="mb-e">
                <label className="form-label">Name</label>   
                    <input
                        type="text"
                        className="form-control"
                        id="name" value={name}
                        onChange={(e) => setName(e.target.value)}          
                        />
                </div> 
                <div className="mb-e">
                    <label className="form-label">Description</label>   
                        <textarea
                            type="description"
                            className="form-control"
                            id="name" value={description}
                            onChange={(e) => setDescription(e.target.value)}>          
                            </textarea>
                </div>  
                <div className="mb-e">
                    <label className="form-label">Status</label>   
                        <select id="status"
                            className="form-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option value="new">Not Started</option>
                            <option value="progress">In Progress</option>
                            <option value="completed">Completed</option>
                            </select>
                </div>  
                
                <br></br>
                <button type="submit" className="btn btn-secondary">
                    <FaEdit /> Update Project
                </button>
        </form>             
    </div>
  )
}
