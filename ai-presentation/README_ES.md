# Presentación 3D: Inteligencia Artificial y su Impacto en la Humanidad

Una presentación interactiva con modelos 3D sobre la Inteligencia Artificial, automatización, modelos de IA y su impacto global en la humanidad.

## 🎯 Características

- **6 Diapositivas Interactivas** con modelos 3D animados
- **Navegación Intuitiva** con botones, indicadores y teclado
- **Modelos 3D Animados** creados con Three.js y React Three Fiber
- **Diseño Moderno** con gradientes y efectos visuales
- **Totalmente Responsive** y optimizado para diferentes dispositivos

## 📊 Contenido de la Presentación

### 1. **Portada**
- Modelo 3D: Cerebro con red neuronal
- Título: "Inteligencia Artificial - El Futuro de la Humanidad"

### 2. **¿Qué es la IA?**
- Modelo 3D: Red neuronal de 3 capas
- Conceptos: Aprendizaje Automático, Redes Neuronales, Procesamiento de Lenguaje, Visión por Computadora, Deep Learning, IA Generativa

### 3. **Automatización**
- Modelo 3D: Robot animado
- Mensaje: "Transformando industrias y procesos"

### 4. **Modelos de IA**
- Modelo 3D: Cubos de datos flotantes
- Ejemplos: GPT-4 (Modelos de Lenguaje), DALL-E (Generación de Imágenes), AlphaFold (Ciencia y Medicina)

### 5. **Impacto Global**
- Modelo 3D: Globo terráqueo con puntos de conexión
- **Beneficios**: Salud mejorada, Educación accesible, Eficiencia energética
- **Desafíos**: Ética y privacidad, Desempleo tecnológico, Sesgos algorítmicos

### 6. **El Futuro con IA**
- Modelo 3D: Toro y esfera animados
- Mensaje: "Colaboración humano-IA para un mundo mejor"

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

```bash
# Las dependencias ya están instaladas, pero si necesitas reinstalar:
npm install
```

### Ejecutar la Aplicación

```bash
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### Compilar para Producción

```bash
npm run build
```

## 🎮 Controles de Navegación

- **Botón "Siguiente"**: Avanza a la siguiente diapositiva
- **Botón "Anterior"**: Retrocede a la diapositiva anterior
- **Tecla →** o **Espacio**: Avanza a la siguiente diapositiva
- **Tecla ←**: Retrocede a la diapositiva anterior
- **Indicadores de puntos**: Haz clic para ir directamente a una diapositiva específica
- **Mouse**: Arrastra para rotar la vista 3D
- **Scroll del mouse**: Zoom in/out en los modelos 3D

## 🛠️ Tecnologías Utilizadas

- **React**: Framework de JavaScript para la interfaz de usuario
- **Three.js**: Biblioteca de JavaScript para gráficos 3D
- **React Three Fiber**: Renderizador React para Three.js
- **@react-three/drei**: Helpers y abstracciones para React Three Fiber
- **Tailwind CSS**: Framework de CSS para estilos modernos
- **PostCSS**: Procesador de CSS

## 📁 Estructura del Proyecto

```
ai-presentation/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Componente principal con todas las diapositivas
│   ├── index.js        # Punto de entrada de React
│   └── index.css       # Estilos globales con Tailwind
├── package.json
├── tailwind.config.js
└── README_ES.md
```

## 🎨 Personalización

### Cambiar Colores
Los colores están definidos en formato hexadecimal en el archivo `App.js`:
- Azul primario: `#3b82f6`
- Púrpura: `#8b5cf6`
- Verde: `#10b981`
- Naranja: `#f59e0b`
- Rojo: `#ef4444`

### Agregar Nuevas Diapositivas
1. Crea un nuevo componente de diapositiva en `App.js`
2. Agrega el componente al array `slides`
3. La navegación se actualizará automáticamente

### Modificar Modelos 3D
Los modelos 3D están construidos con primitivas de Three.js (Box, Sphere, Torus, etc.). Puedes modificar sus propiedades en cada componente de diapositiva.

## 📝 Notas

- Los modelos 3D son completamente interactivos y se pueden rotar con el mouse
- Las animaciones son fluidas y optimizadas para rendimiento
- La presentación es totalmente funcional sin conexión a internet
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🎓 Uso Educativo

Esta presentación es ideal para:
- Conferencias sobre Inteligencia Artificial
- Clases universitarias de tecnología
- Presentaciones corporativas
- Eventos de divulgación científica
- Talleres y seminarios sobre IA

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y comercial.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar la presentación:
1. Haz un fork del proyecto
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un pull request

---

**Creado con ❤️ usando React, Three.js y Tailwind CSS**
