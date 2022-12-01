# Proyecto APIRestful

###### Este proyecto es una APIRestful de un e-commerce con dos accesos uno de usuario y otro de administrador. La base de datos utilizada es MONGODB.

###### El acceso de usuario tendrá habilitadas las rutas correspondientes para acceder a una vista en handlebars con los productos, agregarlos a un carrito y crear una orden.
###### El administrador por otro lado podrá acceder a una lista de usuarios, modificar productos y ordenes. 

###### Para ingresar el usuario y el administrador deberá crearse una cuenta. Una vez almacenada la información del usuario, podrá acceder las veces que sea necesarias para adquirir los productos. Para el logueo y el registro se utilizó Passport y Passport JWT. Al realizar una compra, se generará una orden con los detalles y dicha información será enviada a través de TWILIO y NODEMAILER por mensaje y email respectivamente. 

###### Todas las rutas funcionan todas y pueden ser chequeadas a través de POSTMAN. Por favor, asegurarse de escribir correctamente las rutas para cada endpoint. Cada endpoint creado contiene rutas con los verbos GET, POST, PUT y DELETE. 

## ¿Cómo accedo al proyecto?

###### 1_Clonar el repositorio.
###### 2_Instalar node modules con : *npm i*.
###### 3_ Crear un archivo *.env* en la raíz del proyecto y pegarle todas las variables de entorno que se encuentran en *_example.env_*.
###### 5_ Una vez finalizada la instalación, ubicarse en /src y correr la aplicación con *node app.js*.
###### 4_Para el token de TWILIO, ponerse en contacto con el programador. 
###### 5_ El archivo package.json contiene una extensa lista de todas las dependencias instaladas.

# ENGLISH
# APIRestful

###### This is an APIRestful with a registration and login form and access to different features based on your credentials (user or administrator). MONGODB is used as the main database.

###### The user credential allows you to have access through handlebars to all the products, add them to your cart and create an order.
###### The administrator, on the other hand, can add products to the inventory, modify their characteristiCs and can have access to all the orders created and users registered.

###### In order to have access to the different features, the user or administrator must register. Once the registration form is completed, you will be redirected to your profile with your personal details. To log in and reguster, Passport and Passport JWT were used. Once an order is placed, the user will receive and email and a text message with the details. TWILIO and NODEMAILER were used for these features.

###### All routes can be checked through POSTMAN.

## HOW TO ACCESS THE PROJECT

###### 1_Clone the repository.
###### 2_Install node modules: *npm i*.
###### 3_ Create a *.env* file in the src folder y and paste all the envornoment variables from *_example.env_*.
###### 5_ Once everything's installed, position yourself in /src and run the app with *node app.js*.
###### 4_Get in touch with the developer for TWILIO'S token. For security reasons, Twilio does not allow me to publicly share the token. 
###### 5_ The package.json file contains a thorough list of all the installed dependencies.

###### Javier Garcia