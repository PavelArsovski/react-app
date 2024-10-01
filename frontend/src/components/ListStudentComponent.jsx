import ButtonLink from "./ButtonLink";
import useListStudentComponentHook from "../hooks/useListStudentComponentHook";

const ListStudentComponent = () => {
  const { students, updateStudent, deleteStudentById } = useListStudentComponentHook();

  return (
    <div className="container">
      <h2 className="text-center my-3">List of Students</h2>
      <ButtonLink text="Add Student" toAction="/add-student" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Action #1</th>
            <th scope="col">Action #2</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => updateStudent(item.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteStudentById(item.id)}
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

export default ListStudentComponent;