import ButtonLink from "./ButtonLink";
import useDormComponentHook from "../hooks/useDormComponentHook";

const DormComponent = () => {
  const {
    dormName,
    setDormName,
    dormDescription,
    setDormDescription,
    title,
    saveOrUpdateDorm,
  } = useDormComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/dorms" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Dorm Name: </label>
                <input
                  type="text"
                  name="dormName"
                  placeholder="Enter Dorm Name"
                  className="form-control"
                  value={dormName}
                  onChange={(e) => setDormName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Dorm Location: </label>
                <input
                  type="text"
                  name="dormDescription"
                  placeholder="Enter Dorm Location"
                  className="form-control"
                  value={dormDescription}
                  onChange={(e) => setDormDescription(e.target.value)}
                />
              </div>
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateDorm}
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

export default DormComponent;