
# Login & Sign In

Aplicación web desarrollada en Angular que trata de un login y un registro, permitiendo que uno se autentique y entre a un dashboard.
Se usa `local storage` en vez de una base de datos.

---

# Caracteristicas

Arquitectura basada en componentes
Validación de formularios reactivos
Protección de rutas

---

# Estructura

```
/src/app
│
├── components
│ ├── login
│ ├── register
│ ├── dashboard
│ ├── header
│ └── footer
│
├── services
│ └── auth-service.ts
│
├── guards
│ └── auth-guard.guard.ts
│
├── models
  └── user.ts
```
---

# Tecnologias usadas

* Node.js
* Angular
* Local storage

---

# instalacion

Instalar node en su pagina web 

```
https://nodejs.org/en/download
```

Clonar el repositorio 
```
git clone https://github.com/luz014/login_-_sign_in.git

cd Login_signIn
```

Instalar repositorios
```
npm install
```

Y para ejecutarlo
```
ng serve -o
```

---

# Nomeclatura del proyecto

* Archivos

kebab-case

`auth-service.ts` `auth-guard-guard.ts`

* Funciones

camelCase

`isAuthenticated ` `getCurrentUser `

* Variables

camelCase

`currentUser`

* Clases

PastalCase

`AuthService`

* SCSS

kebab-case

`.form-container `

---

# Seguridad

Usa authguard para el control de accesso
Usa validaciones por el servicio
Y guarda en el local storage

---

# Autor

Desarrollado por: Luis Stocel, Isaac Sagel y HEnry Lloyd
Proyecto afinal de Angular - LOgin y Sign In