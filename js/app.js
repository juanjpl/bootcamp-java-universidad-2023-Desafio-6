

const verificarUser= (texto) => {

  let usuario={
    usuarioIngresado:'',
    passwordIngresado:''
  }

  console.log(usuario)
  
          
    usuario.usuarioIngresado = prompt(`Ingrese usuario:`);
    usuario.passwordIngresado=prompt(`Ingrese password:`);
       
    console.log(usuario)

     while (!usuario.usuarioIngresado || usuario.usuarioIngresado!='admin'|| !usuario.passwordIngresado || usuario.passwordIngresado!='1234'){
      alert('Usuario o contraseña erroneo, vuelva a ingresarlos.');
      usuario.usuarioIngresado = prompt(`Ingrese usuario:`);
      usuario.passwordIngresado=prompt(`Ingrese password:`);
      console.log(usuario)
      
     };
  
    alert('Bienvenido! Usuario y password Correctos');
    console.log('Bienvenido! Usuario y password Correctos');
   
    return usuario;
  };

  const chequearUsuario =  verificarUser()
  console.log(chequearUsuario);



