-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-09-2021 a las 20:47:59
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre`, `estado`) VALUES
(1, 'Categoría 1', 1),
(2, 'Categoría 2', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriassubcategorias`
--

CREATE TABLE `categoriassubcategorias` (
  `id_categoria_subcategoria` int(11) NOT NULL,
  `id_categoria` int(255) NOT NULL,
  `id_subcategoria` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(255) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`) VALUES
(1, 'Producto 1'),
(2, 'Producto 2'),
(3, 'Producto 3'),
(4, 'Producto 4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productoscostos`
--

CREATE TABLE `productoscostos` (
  `producto_precio_id` int(11) NOT NULL,
  `costo` float NOT NULL,
  `cantidad` int(255) NOT NULL,
  `ipc` float NOT NULL,
  `bonificacion` float NOT NULL,
  `descuento` float NOT NULL,
  `fecha` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `id_producto` int(255) NOT NULL,
  `codigo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productoscostos`
--

INSERT INTO `productoscostos` (`producto_precio_id`, `costo`, `cantidad`, `ipc`, `bonificacion`, `descuento`, `fecha`, `id_producto`, `codigo`) VALUES
(1, 20000, 410, 111, 0, 0, '2021-09-21 22:56:05.966000', 2, '222222'),
(2, 5000, 55, 111, 0, 0, '2021-09-21 22:56:05.976000', 3, '3333333'),
(3, 10000, 4, 122, 0, 0, '2021-09-21 22:56:05.974000', 1, '111111'),
(4, 5000, 50, 0, 2, 5, '2021-09-21 22:59:01.528000', 4, '3333333'),
(5, 20000, 10, 0, 0.2, 0, '2021-09-21 22:59:01.532000', 2, '222222'),
(6, 10000, 5, 0, 0.5, 10, '2021-09-21 22:59:01.532000', 1, '111111');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productossubcategorias`
--

CREATE TABLE `productossubcategorias` (
  `id_producto_subcategoria` int(255) NOT NULL,
  `id_producto` int(255) NOT NULL,
  `id_subcategoria` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategorias`
--

CREATE TABLE `subcategorias` (
  `id_subcategoria` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `estado` tinyint(255) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`) USING BTREE;

--
-- Indices de la tabla `categoriassubcategorias`
--
ALTER TABLE `categoriassubcategorias`
  ADD PRIMARY KEY (`id_categoria_subcategoria`) USING BTREE,
  ADD KEY `fk_id_categoria` (`id_categoria`),
  ADD KEY `fk_id_subcategoria` (`id_subcategoria`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `productoscostos`
--
ALTER TABLE `productoscostos`
  ADD PRIMARY KEY (`producto_precio_id`),
  ADD KEY `fk_id_producto` (`id_producto`);

--
-- Indices de la tabla `productossubcategorias`
--
ALTER TABLE `productossubcategorias`
  ADD PRIMARY KEY (`id_producto_subcategoria`),
  ADD KEY `fk_productossubcantegorias_id_subcategoria` (`id_subcategoria`),
  ADD KEY `fk_fk_productossubcantegorias_id_producto` (`id_producto`);

--
-- Indices de la tabla `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD PRIMARY KEY (`id_subcategoria`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categoriassubcategorias`
--
ALTER TABLE `categoriassubcategorias`
  MODIFY `id_categoria_subcategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productoscostos`
--
ALTER TABLE `productoscostos`
  MODIFY `producto_precio_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productossubcategorias`
--
ALTER TABLE `productossubcategorias`
  MODIFY `id_producto_subcategoria` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `subcategorias`
--
ALTER TABLE `subcategorias`
  MODIFY `id_subcategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoriassubcategorias`
--
ALTER TABLE `categoriassubcategorias`
  ADD CONSTRAINT `fk_id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_subcategoria` FOREIGN KEY (`id_subcategoria`) REFERENCES `subcategorias` (`id_subcategoria`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productoscostos`
--
ALTER TABLE `productoscostos`
  ADD CONSTRAINT `fk_id_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productossubcategorias`
--
ALTER TABLE `productossubcategorias`
  ADD CONSTRAINT `fk_fk_productossubcantegorias_id_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_productossubcantegorias_id_subcategoria` FOREIGN KEY (`id_subcategoria`) REFERENCES `subcategorias` (`id_subcategoria`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
