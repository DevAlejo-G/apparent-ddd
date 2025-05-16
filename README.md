## 📦 apparent-ddd

Aplicación CRUD básica con enfoque en **Domain-Driven Design (DDD)**.
Este proyecto simula un sistema de órdenes (orders) que interactúa con usuarios y productos aplicando buenas prácticas arquitectónicas como **Anti-Corruption Layer (ACL)**.

### 🎯 Características

* ✨ Arquitectura basada en **DDD** (Entidades, Repositorios, Casos de Uso, Servicios de Dominio)
* 🔌 Implementación de **Anti-Corruption Layer (ACL)** entre los contextos:

  * `Order` ↔️ `User`
  * `Order` ↔️ `Product`
* 🛒 Al registrar una orden:

  * Se valida que el `uuid` del usuario exista.
  * Se valida que los productos existan y tengan stock suficiente.
  * Se calcula automáticamente el **total** de la orden.
  * Se actualiza el **stock** de los productos.
* 📁 Separación por capas (Infraestructura, Aplicación, Dominio, Interfaces)

### 🧱 Tecnologías

* Node.js + TypeScript
* Express
* MongoDB (Mongoose)
* Arquitectura Hexagonal / Ports & Adapters (opcional si lo estás aplicando)
