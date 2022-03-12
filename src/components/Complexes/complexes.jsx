import { useEffect, useState } from "react";

function Complexes() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/complexes")
      .then((res) => res.json())
      .then((data) => setBuildings(data));
  }, []);

  const handleCompany = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/complexes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => setBuildings(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        name="building_companies"
        onChange={handleCompany}
      >
        {buildings &&
          buildings.map((building) => (
            <option key={building.company_id} value={building.company_id}>
              {building.company_name}
            </option>
          ))}
      </select>
    </div>
  );
}
export default Complexes;
