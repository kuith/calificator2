import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

const ParcialesContenedor = () => {
  return (
     <div className="tablaParciales">
        <table className ="table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><BsFillTrashFill/></th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row"><BsFillTrashFill/></th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row"><BsFillTrashFill/></th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default ParcialesContenedor;