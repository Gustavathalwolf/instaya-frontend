import {Link} from "react-router-dom"

const OrdersHome = () => {
    return (
    <div className="square square-lg bg-white border">
    <div className="container-fluid">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Codigo</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Ciudad de entrega</th>
                  <th scope="col">Direccion de entrega</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>CFC</td>
                  <td>11/11/2022</td>
                  <td>Santa Marta</td> 
                  <td>Calle 123 # 45 -67</td> 
                  <td>Cumplido</td> 
                </tr>
                <tr>
                  <th scope="row">2</th>
                    <td>XGB</td>
                    <td>12/11/2022</td>
                    <td>Barranquilla</td> 
                    <td>Calle 150A # 45 -67</td> 
                    <td>Cancelado</td> 
                </tr>
              </tbody>
            </table>
        </div>
            <div className="btn-order">
                <Link to="/orders-register"><input value="Crear orden" id="btn-create" className="btn btn-primary" type="submit"></input></Link>
                <input value="Editar orden" id="btn-edit" className="btn btn-primary" type="submit"></input>
            </div>
        </div>
    )
}

export default OrdersHome