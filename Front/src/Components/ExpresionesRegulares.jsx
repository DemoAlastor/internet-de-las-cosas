const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion piso
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

export {expresiones}