import ButtonLink from "./ButtonLink";
import useStudentComponentHook from "../hooks/useStudentComponentHook";

const StudentComponent = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    city,
    setCity, 
    saveOrUpdateStudent,
    title,
  } = useStudentComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/students" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email: </label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">City: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateStudent}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComponent;