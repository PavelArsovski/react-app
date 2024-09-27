import ButtonLink from "./ButtonLink";
import useListDormComponentHook from "../hooks/useListDormComponentHook"; 

const ListDormComponent = () => {
  const { dorms, updateDorm, removeDorm } = useListDormComponentHook(); 

  return (
    <div className="container">
      <h2 className="text-center py-3">List of Dorms</h2>
      <ButtonLink text="Add Dorm" toAction="/add-dorm" /> 
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Dorm Name</th>
            <th scope="col">Dorm Location</th>
            <th scope="col">Action #1</th>
            <th scope="col">Action #2</th>
          </tr>
        </thead>
        <tbody>
          {dorms.map((item) => { 
            return (
              <tr key={item.id}>
                <td>{item.dormName}</td> 
                <td>{item.dormDescription}</td> 
                <td>
                  <button
                    className="btn btn-outline-info me-2"
                    onClick={() => updateDorm(item.id)} 
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeDorm(item.id)} 
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListDormComponent; 