import { Link } from "react-router-dom";
import "../../App.css";

import { useEffect, useState, useRef } from "react";
function Buildings() {
  const [buildings, setBuildings] = useState([]);
  const [complex, setComplex] = useState([]);
  const [floors, setFloors] = useState([]);
  const [years, setYears] = useState([]);
  const [banks, setBanks] = useState([]);
  const img = useRef(null);
  const wrapper = useRef(null);
  const companyName = useRef(null);
  const complexName = useRef(null);
  const location = useRef(null);
  const floorNumber = useRef(null);
  const housePrice = useRef(null);
  const houseStartedAt = useRef(null);
  const houseSize = useRef(null);

  useEffect(() => {
    fetch("http://localhost:9000/buildings")
      .then((res) => res.json())
      .then((data) => {
        setBuildings(data);
      });
  }, []);

  const handleComplex = (e) => {
    let src = "";
    let name = "";
    buildings.forEach((item) => {
      if (item.company_id == e.target.value) {
        src = item.imageurl;
        name = item.company_name;
      }
    });
    wrapper.current.classList.remove("none");
    wrapper.current.classList.add("active");
    img.current.src = src;
    companyName.current.textContent = name;
    complexName.current.textContent = null;
    location.current.textContent = null;
    floorNumber.current.textContent = null;
    housePrice.current.textContent = null;
    houseStartedAt.current.textContent = null;
    houseSize.current.textContent = null;

    fetch("http://localhost:9000/complexes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company_id: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => setComplex(data))
      .catch((err) => console.log(err));
  };
  const handleFloor = (e) => {
    let name = "";
    let complexLocation = "";
    complex.forEach((item) => {
      if (item.complex_id == e.target.value) {
        name = item.complex_name;
        complexLocation = item.complex_location;
      }
    });
    complexName.current.textContent = name;
    complexName.current.textContent = name;
    location.current.textContent = complexLocation;
    floorNumber.current.textContent = null;
    housePrice.current.textContent = null;
    houseStartedAt.current.textContent = null;
    houseSize.current.textContent = null;
    fetch("http://localhost:9000/houses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company_id: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => setFloors(data))
      .then((err) => console.log(err));
  };

  const handleYears = (e) => {
    let floor_Number;
    let house_price;
    let house_started_at;
    let house_size;
    floors.forEach((floor) => {
      if (floor.house_id == e.target.value) {
        floor_Number = floor.house_name;
        house_price = floor.house_price;
        house_started_at = floor.house_started_at;
        house_size = floor.house_size;
      }
    });
    floorNumber.current.textContent = floor_Number;
    housePrice.current.textContent = house_price;
    houseStartedAt.current.textContent = house_started_at;
    houseSize.current.textContent = house_size;
    fetch("http://localhost:9000/years")
      .then((res) => res.json())
      .then((data) => setYears(data))
      .then((err) => console.log(err));
  };
  const getBanksInfo = (e) => {
    fetch("http://localhost:9000/banks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bank_credit_year: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBanks(data);
      })
      .then((err) => console.log(err));
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
        <div className="col-2">
          <h4 className="text-center text-light pb-2">Complexes:</h4>
          <select
            className="form-select"
            aria-label="Default select example"
            name="building_companies"
            onChange={handleFloor}
          >
            {complex &&
              complex.map((building) => (
                <option key={building.complex_id} value={building.complex_id}>
                  {building.complex_name}
                </option>
              ))}
          </select>
        </div>
        <div className="col-2">
          <h4 className="text-center text-light pb-2">Floors:</h4>
          <select
            className="form-select"
            aria-label="Default select example"
            name="building_companies"
            onChange={handleYears}
          >
            {floors &&
              floors.map((floor) => (
                <option key={floor.house_id} value={floor.house_id}>
                  {floor.house_name}
                </option>
              ))}
          </select>
        </div>
        <div className="col-2">
          <h4 className="text-center text-light pb-2">Years:</h4>
          <select
            className="form-select"
            aria-label="Default select example"
            name="building_companies"
            onChange={getBanksInfo}
          >
            {years &&
              years.map((year) => (
                <option key={year.bank_id} value={year.bank_credit_year}>
                  {year.bank_credit_year}
                </option>
              ))}
          </select>
        </div>
        <div className="col-3">
          <h4 className="text-center text-light pb-2">Banks:</h4>
          <select
            className="form-select"
            aria-label="Default select example"
            name="building_companies"
          >
            {banks &&
              banks.map((bank) => (
                <option key={bank.bank_id} value={bank.bank_credit_year}>
                  {bank.bank_name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="none" ref={wrapper}>
        <img ref={img} className="avatar" />
        <div className="div d-flex align-items-center mt-2">
          <h2 className="fw-bold">Quruvchi Tashkilot:</h2>
          <h3 className="ms-2" ref={companyName}></h3>
        </div>
        <div className="div d-flex align-items-center mt-2">
          <h3 className="fw-bold">Tashkilot Kompleksi:</h3>
          <h4 className="ms-2" ref={complexName}></h4>
        </div>
        <div className="div d-flex align-items-center mt-2">
          <h4 className="fw-bold">Joylashuvi:</h4>
          <h5 className="ms-2" ref={location}></h5>
        </div>
        <div className="div d-flex align-items-center mt-2">
          <h4 className="fw-bold">Etaji:</h4>
          <h5 className="ms-2" ref={floorNumber}></h5>
        </div>
        <div className="div d-flex align-items-center mt-2">
          <h4 className="fw-bold">1 m^2 Narxi:</h4>
          <h5 className="ms-2" ref={housePrice}></h5>
          <h4 className="fw-bold">$</h4>
        </div>
        <div className="div d-flex align-items-center mt-2">
          <h4 className="fw-bold">Boshlangan sanasi:</h4>
          <h5 className="ms-2" ref={houseStartedAt}></h5>
        </div>
        <div className="div d-flex align-items-center mt-2">
          <h4 className="fw-bold">xajmi:</h4>
          <h5 className="ms-2" ref={houseSize}></h5>
          <h5 className="fw-bold ms-1">m^2</h5>
        </div>
      </div>
    </>
  );
}

export default Buildings;
