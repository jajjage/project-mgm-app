import {Link, useParams} from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';  
import { GET_PROJECT } from '../queries/projectQueries';    
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProject from '../components/EditProject';

export default function Project() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id }
    });

    if (loading) return <Spinner />;
    if (error) return <p>Something went Wrong</p>;

  return (
      <>
          {!loading && !error && (
            <div className="col-md-15">
               <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-itemscenter">
                        <h5 className="card-title">{data.project.name}</h5>
                        
                    <Link to='/'className="btn btn-light"
                    >Back</Link>
                   </div>
                        <p>{data.project.description }</p>
                        
                         <h5>Project Status</h5> 
                        <p className="small">{data.project.status}</p>
                          
                          <ClientInfo client={data.project.client} />
                                      <div></div>
                                      
                                      <br></br>
                        <EditProject project={data.project} />
              
                          <DeleteProjectButton projectId={data.project.id} />
                    </div>
                </div>
             </div>
          )}
      </>
  )
}
