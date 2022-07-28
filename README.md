# Proyecto APIRestful

###### Este proyecto es una APIRestful de un e-commerce con dos accesos uno de usuario y otro de administrador. La base de datos utilizada es MONGODB.

###### El acceso de usuario tendrá habilitadas las rutas correspondientes para acceder a una vista en handlebars con los productos, agregarlos a un carrito y crear una orden
###### El administrador por otro lado podrá acceder a una lista de usuarios, modificar productos y ordenes. 

###### Para ingresar el usuario y el administrador deberá crearse una cuenta. Una vez almacenada la información del usuario, podrá acceder las veces que sea necesarias para adquirir los productos. Para el logueo y el registro se utilizó Passport y Passport JWT. Al realizar una compra, segenerará una orden con los detalles y dicha información será enviada a través de TWILIO y NODEMAILER por mensaje y email respectivamente. 

###### Si bien gran parte del front está realizada aun quedan detalles por terminar. Sin embargo, las rutas funcionan todas y pueden ser chequeadas a través de POSTMAN. Por favor, asegurarse de escribir correctamente las rutas para cada endpoint.

## ¿Cómo accedo al proyecto?

###### 1_Clonar el repositorio
###### 2_Instalar node modules con : *npm i*
###### 3_ Crear un archivo *.env* en la raíz del proyecto y pegarle todas las variables de entorno que se encuentran en *_example.env_*
###### 5_ Una vez finalizada la instalación, ubicarse en /src y correr la aplicación con *node app.js*
###### 4_Para el token de TWILIO, ponerse en contacto con el programador. 
###### 5_ El archivo package.json contiene una extensa lista de todas las dependencias instaladas.