import { useForm } from "react-hook-form";

const OrdersRegister = () => {
const { register, handleSubmit, formState: {errors} } = useForm();
const onSubmit = data => console.log(data);
return (
    <div className="square square-lg bg-white border">
    <div className="container">
    <form className="row g-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
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

        <div className='btn-register'>
        <input className="btn btn-primary" id="btn-crear" value ="Crear" type="submit"/>
        </div>
    </form>
    </div>
 </div>
)
}

export default OrdersRegister