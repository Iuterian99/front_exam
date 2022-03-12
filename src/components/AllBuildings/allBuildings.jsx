import { useEffect, useState } from "react";
function Buildings() {
  const [buildings, setBuildings] = useState([]);
  const [complex, setComplex] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/buildings")
      .then((res) => res.json())
      .then((data) => setBuildings(data));
  }, []);

  const handleComplex = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/complexes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company_id: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => setComplex(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row mt-5 pb-5 d-flex align-items-center">
        <div className="col-3">
          <h4 className="text-center text-light pb-2">Building Companies:</h4>

          <select
            className="form-select"
            aria-label="Default select example"
            name="building_companies"
            onChange={handleComplex}
          >
            {buildings &&
              buildings.map((building) => (
                <option key={building.company_id} value={building.company_id}>
                  {building.company_name}
                </option>
              ))}
          </select>
        </div>
        <div className="col-3">
          <h4 className="text-center text-light pb-2">Complexes:</h4>
          <select
            className="form-select"
            aria-label="Default select example"
            name="building_companies"
          >
            {complex &&
              complex.map((building) => (
                <option key={building.complex_id} value={building.complex_id}>
                  {building.complex_name}
                </option>
              ))}
          </select>
        </div>
        <div className="col-3"></div>
        <div className="col-3"></div>
      </div>
    </>
  );
}

export default Buildings;
