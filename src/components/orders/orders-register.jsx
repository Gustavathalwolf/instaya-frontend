import { useForm } from "react-hook-form";

const OrdersRegister = () => {
const { register, handleSubmit, formState: {errors} } = useForm();
const onSubmit = data => console.log(data);
return (
    <div className="container">
    <div className="square square-lg bg-white border shadow-sm p-3 mb-5 bg-white rounded">
    <form className="row g-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="bi bi-send-plus-fill" viewBox="0 0 16 16">
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
        </svg>
        <div className="col-6">
            <label className="form-label">Direccion de recogida</label>
            <input id="pickupDirection" className="form-control"
                {...register("pickupDirection", { required: true, maxLength: 100 })}
                aria-invalid={errors.pickupDirection ? "true" : "false"} 
            />
            {errors.pickupDirection && <p class="color-error">Debe completar el campo</p>}
        </div >
        <div className="col-6">
            <label className="form-label">Ciudad de recogida</label>
            <input id="pickupCity" className="form-control"
                {...register("pickupCity", { required: true, maxLength: 20 })} 
                aria-invalid={errors.pickupCity ? "true" : "false"} 
            />
            {errors.pickupCity && <p class="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Nombre del destinatario</label>
            <input id="receiverName" className="form-control"
                {...register("receiverName", { required: true, maxLength: 100 })}
                aria-invalid={errors.receiverName ? "true" : "false"}  
            />
            {errors.receiverName && <p class="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Cedula/NIT del destinatario</label>
            <input id="receiverID" className="form-control"
                {...register("receiverID", { required: true, maxLength: 20 })}
                aria-invalid={errors.receiverID ? "true" : "false"}  
            />
            {errors.receiverID && <p class="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Direccion de entrega</label>
            <input id="deliveryAddress" className="form-control"
                {...register("deliveryAddress", { required: true, maxLength: 20 })}
                aria-invalid={errors.deliveryAddress ? "true" : "false"}  
            />
            {errors.deliveryAddress && <p class="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Ciudad de entrega</label>
            <input id="deliveryCity" className="form-control"
                {...register("deliveryCity", { required: true, maxLength: 20 })}
                aria-invalid={errors.deliveryCity ? "true" : "false"}  
            />
            {errors.deliveryCity && <p class="color-error">Debe completar el campo</p>}
        </div>

            <div className="col-3">
                <label className="form-label">Largo</label>
                <input id="length" className="form-control"
                    {...register("length", { required: true, maxLength: 20 })}
                    aria-invalid={errors.length ? "true" : "false"}  
                />
                {errors.length && <p class="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-3">
                <label className="form-label">Ancho</label>
                <input id="width" className="form-control"
                    {...register("width", { required: true, maxLength: 20 })}
                    aria-invalid={errors.width ? "true" : "false"}  
                />
                {errors.width && <p class="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-3">
                <label className="form-label">Alto</label>
                <input id="height" className="form-control"
                    {...register("height", { required: true, maxLength: 20 })}
                    aria-invalid={errors.height ? "true" : "false"}  
                />
                {errors.height && <p class="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-3">
                <label className="form-label">Peso</label>
                <input id="weight" className="form-control"
                    {...register("weight", { required: true, maxLength: 20 })}
                    aria-invalid={errors.weight ? "true" : "false"}  
                />
                {errors.weight && <p class="color-error">Debe completar el campo</p>}
            </div>
        <div className="col-12 mt-4">
        <div className="form-check">
        <input type="checkBox" id="checkTerms" className="form-check-input"/>
        <label htmlFor = "checkTerms" className="form-check-label">Mercancia delicada</label>
        </div>
        </div>
        <div className='btn-register'>
        <input className="btn btn-primary" id="btn-create" value ="Crear" type="submit"/>
        </div>
    </form>
    </div>
 </div>
)
}

export default OrdersRegister