---
sidebar_position: 1
---

# Introducción

Firebase para el desarrollo de aplicaciones moviles y web.

---
## ¿Qué es Firebase?

Firebase es un servicio en la nube desarrollado por google. 


Se presenta como una opción [**Backend as a Service (BaaS)** ](https://www.cloudflare.com/es-es/learning/serverless/glossary/backend-as-a-service-baas/). Cuenta con funcionalidades y caracteristicas propias de bases de datos, además de incluir funcionalidades propias que lo convierten en una buena opción para el desarrollo de aplicaciones.

![Firebase alt](./img/Firebase1%20(1).webp)

## Base de datos

Firebase es una [plataforma de base de datos](https://www.paradigmadigital.com/dev/cloud-firestore-realtime-database-base-datos-firebase/) **NoSQL**, también conocidas como bases de datos no relacionadas. 

Los datos se almacenan en un formato de documento, muy similar a la estructura de archivos en formato **JSON**.


![formato_documento](https://www.sgoliver.net/blog/wp-content/uploads/2016/11/predicciones-inicial.png)

### Realtime Database

Es la primera version de base de datos de firebase, se encuentra basada en JSON ideal para apicaciones donde se requiere que la comunicación y la velocidad de respuesta se realice de manera instantanea.

Sin embargo presenta algunas limitaciones y desventajas frente a [Cloud FireStore](#cloud-firestore), Debido que no soporta funcionalidades de filtrado avanzado y en realtime database cada consulta retorna el arbol completo de datos aún si solamente necesitamos un dato o un registro especifico. Además de tener un mayor coste de utilización dado que el cobro de uso se realiza en base al tamaño de los datos transferidosee

### Cloud FireStore

Cloud FireStore es el modelo de base de datos más reciente de firebase, se encuentra basado en una base de datos NoSQL, haciendolo más estrucutrado y escalable en comparación a su predecesor. 

Cuenta con un sistema de consultas más avanzado permitiendo filtrar los datos en las consultas con mayor precisión, esto permite recuperar solamente los datos necesarios. Cuenta además con soporte offline y envio de datos en tiempo real.

Su curva de aprendizaje es mucho mayor en comparación a realtime database y el costo se maneja a nivel de operación, donde cada acción como consultar, modificar o eliminar ya cuenta como una operación y genera su propio costo.

