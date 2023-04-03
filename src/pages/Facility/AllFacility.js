// import { useEffect, useState } from "react";

export const AllFacility = () => {
  return (
    <>
      <div className="container">
        <div className="row m-3 ms-0">
          <h3 className="text-success">All Facility</h3>
        </div>
        <div className="row mx-lg-auto m-3">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col">Facility ID</th>
                <th scope="col">Equipment Number</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">{/* Data */}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};
