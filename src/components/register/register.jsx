import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="square square-lg bg-white border">
        <div className="container">
        <form className="row g-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
                <label className="form-label">Nombre completo</label>
                <input id="completeName" className="form-control"
                    {...register("completeName", { required: true, maxLength: 100 })}
                    aria-invalid={errors.completeName ? "true" : "false"} 
                />
                {errors.completeName && <p class="color-error">Debe completar el campo</p>}
            </div >
            <div className="col-6">
                <label className="form-label">Usuario</label>
                <input id="userName" className="form-control"
                    {...register("userName", { required: true, maxLength: 20 })} 
                    aria-invalid={errors.userName ? "true" : "false"} 
                />
                {errors.userName && <p class="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-12">
                <label className="form-label">Correo electronico</label>
                <input id="email" className="form-control"
                    {...register("email", { required: true, maxLength: 100 })}
                    aria-invalid={errors.email ? "true" : "false"}  
                />
                {errors.email && <p class="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-6">
                <label className="form-label">Contraseña</label>
                <input id="password" type ="passowrd" className="form-control"
                    {...register("password", { required: true, maxLength: 20 })}
                    aria-invalid={errors.password ? "true" : "false"}  
                />
                {errors.password && <p class="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-6">
                <label className="form-label">Repetir contraseña</label>
                <input id="repeatPassword" type ="passowrd" className="form-control"
                    {...register("repeatPassword", { required: true, maxLength: 20 })}
                    aria-invalid={errors.repeatPassword ? "true" : "false"}  
                />
                {errors.repeatPassword && <p class="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-12">
               <div className="form-check">
                <input type="checkBox" id="checkTerms" className="form-check-input"/>
                <label htmlFor = "checkTerms" className="form-check-label">Acepto el tratamiento de mis datos</label>
                </div>
            </div>
            <div className='btn-register'>
            <input className="btn btn-primary" id="btn-register" value ="Registrarse" type="submit"/>
            </div>
        </form>
        </div>
     </div>
      );
}

export default Register