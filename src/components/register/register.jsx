import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container">
        <div className="square square-lg bg-white border shadow-sm p-3 mb-5 bg-white rounded">
        <form className="row g-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
            </svg>
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
            <div className="col-12 mt-4">
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