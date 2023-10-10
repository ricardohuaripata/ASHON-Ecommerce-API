<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ricardohuaripata/ASHON-Ecommerce-API">
    <img src="https://res.cloudinary.com/dmravgyts/image/upload/v1696451966/ASHON_ICON_ii65la.png" alt="Logo" width="150" height="150">
  </a>
</p>

<h2 align="center">ASHON STORE API</h2>

##  API - Funcionalidades

* Autenticación:
  * Inicio de sesión [Público]: Permite a los usuarios iniciar sesión en la plataforma proporcionando sus credenciales.
  * Registro [Público]: Permite a los usuarios crear una nueva cuenta en la plataforma.
  * Cierre de sesión [Usuario]: Permite a los usuarios cerrar sesión en la plataforma.
  * Tokens [Usuario]: Proporciona tokens de acceso para autenticar las solicitudes realizadas por usuarios autenticados.
* Gestión de contraseñas:
  * Cambiar contraseña [Usuario]: Permite a los usuarios autenticados cambiar su contraseña actual por una nueva.
  * Olvidó su contraseña [Público]: Permite a los usuarios solicitar un correo electrónico para restablecer su contraseña en caso de olvido.
  * Restablecer contraseña [Público]: Permite a los usuarios restablecer su contraseña utilizando un enlace enviado por correo electrónico.
* Gestión de correo electrónico:
  * Enviar verificación de correo electrónico [Usuario]: Envía un correo electrónico de verificación a los usuarios para confirmar su dirección de correo electrónico.
* Usuarios:
  * Crear nuevo usuario [Administrador]: Permite a los administradores crear nuevos usuarios en la plataforma.
  * Obtener todos los usuarios [Público]: Permite a los usuarios obtener información de todos los usuarios registrados en la plataforma.
  * Obtener datos de usuario utilizando su ID [Público]: Permite a los usuarios obtener información de un usuario específico utilizando su identificación única.
  * Actualizar detalles de usuario utilizando su ID [Usuario]: Permite a los usuarios actualizar su propia información de usuario utilizando su identificación única.
  * Eliminar mi cuenta [Usuario]: Permite a los usuarios eliminar su propia cuenta de usuario.
  * Eliminar usuario utilizando su ID [Administrador]: Permite a los administradores eliminar la cuenta de un usuario utilizando su identificación única.
* Servicios de carrito:
  * Agregar producto al carrito [Usuario]: Permite a los usuarios agregar productos al carrito de compras.
  * Reducir cantidad de producto en uno [Usuario]: Permite a los usuarios reducir la cantidad de un producto en uno en el carrito de compras.
  * Aumentar cantidad de producto en uno [Usuario]: Permite a los usuarios aumentar la cantidad de un producto en uno en el carrito de compras.
  * Obtener carrito [Usuario]: Permite a los usuarios obtener información sobre los productos en su carrito de compras.
  * Eliminar elemento del carrito [Usuario]: Permite a los usuarios eliminar un producto específico del carrito de compras.
  * Eliminar carrito [Usuario]: Permite a los usuarios eliminar todos los productos del carrito de compras.
* Servicios de reseñas:
  * Crear nueva reseña [Usuario]: Permite a los usuarios crear una nueva reseña para un producto.
  * Consultar todas las reseñas [Público]: Permite a los usuarios obtener información sobre todas las reseñas realizadas en la plataforma.
  * Consultar reseña utilizando su ID [Público]: Permite a los usuarios obtener información sobre una reseña específica utilizando su identificación única.
  * Actualizar reseña utilizando su ID [Usuario]: Permite a los usuarios actualizar una reseña específica utilizando su identificación única.
  * Eliminar reseña utilizando su ID [Usuario]: Permite a los usuarios eliminar una reseña específica utilizando su identificación única.
* Servicios de productos:
  * Consultar productos [Público]: Permite a los usuarios obtener información sobre todos los productos disponibles en la plataforma.
  * Consultar producto utilizando su ID [Público]: Permite a los usuarios obtener información sobre un producto específico utilizando su identificación única.
  * Crear nuevo producto [Vendedor]: Permite a los vendedores crear un nuevo producto en la plataforma.
  * Actualizar detalles del producto [Vendedor]: Permite a los vendedores actualizar los detalles de un producto existente.
  * Actualizar imagen principal del producto [Vendedor]: Permite a los vendedores actualizar la imagen principal de un producto.
  * Actualizar imágenes del producto [Vendedor]: Permite a los vendedores actualizar las imágenes asociadas a un producto.
  * Eliminar producto utilizando su ID [Usuario]: Permite a los usuarios eliminar un producto específico utilizando su identificación única.
  * Obtener estadísticas de productos [Administrador]: Permite a los administradores obtener estadísticas relacionadas con los productos en la plataforma, como el número total de productos.
  * Los 5 productos más baratos [Público]: Permite a los usuarios obtener información sobre los 5 productos más baratos disponibles en la plataforma.
  * Agregar color de producto [Vendedor]: Permite a los vendedores agregar un color a un producto existente.
  * Agregar talla de producto [Vendedor]: Permite a los vendedores agregar una talla a un producto existente.
  * Eliminar color de producto [Vendedor]: Permite a los vendedores eliminar un color de un producto existente.
  * Eliminar talla de producto [Vendedor]: Permite a los vendedores eliminar una talla de un producto existente.
* Servicios de favoritos:
  * Obtener lista de productos favoritos [Usuario]: Permite a los usuarios obtener una lista de productos marcados como favoritos.
  * Agregar producto a la lista de favoritos [Usuario]: Permite a los usuarios agregar un producto a su lista de favoritos.
  * Eliminar producto de la lista de favoritos [Usuario]: Permite a los usuarios eliminar un producto de su lista de favoritos.
  * Verificar si el producto está en la lista de favoritos [Usuario]: Permite a los usuarios verificar si un producto específico está en su lista de favoritos.
* Servicios de descuentos:
  * Generar código de descuento [Administrador]: Permite a los administradores generar códigos de descuento para su uso en la plataforma.
  * Obtener monto de descuento [Usuario]: Permite a los usuarios obtener el monto de descuento aplicado a un pedido utilizando un código de descuento.
  * Obtener todos los códigos de descuento [Administrador]: Permite a los administradores obtener información sobre todos los códigos de descuento generados en la plataforma.
  * Verificar código de descuento [Usuario]: Permite a los usuarios verificar la validez de un código de descuento.
  * Eliminar código de descuento [Administrador]: Permite a los administradores eliminar un código de descuento específico.
  * Cancelar código de descuento [Usuario]: Permite a los usuarios cancelar el uso de un código de descuento en un pedido.
* Servicios de pedidos:
  * Crear nuevo pedido [Usuario]: Permite a los usuarios crear un nuevo pedido en la plataforma.
  * Consultar pedidos [Usuario]: Permite a los usuarios obtener información sobre todos sus pedidos realizados.
  * Consultar pedido utilizando su ID [Usuario]: Permite a los usuarios obtener información sobre un pedido específico utilizando su identificación única.
  * Cancelar pedido [Usuario]: Permite a los usuarios cancelar un pedido específico.
  * Actualizar estado del pedido [Administrador]: Permite a los administradores actualizar el estado de un pedido, como "en proceso", "enviado", "entregado", etc.
* Servicios de categorías:
  * Crear nueva categoría [Administrador]: Permite a los administradores crear una nueva categoría en la plataforma.
  * Consultar categorías [Público]: Permite a los usuarios obtener información sobre todas las categorías disponibles en la plataforma.
  * Consultar categoría utilizando su ID [Público]: Permite a los usuarios obtener información sobre una categoría específica utilizando su identificación única.
  * Actualizar detalles de categoría [Administrador]: Permite a los administradores actualizar los detalles de una categoría existente.
  * Actualizar imagen de categoría [Administrador]: Permite a los administradores actualizar la imagen asociada a una categoría.
  * Eliminar categoría [Administrador]: Permite a los administradores eliminar una categoría específica.
