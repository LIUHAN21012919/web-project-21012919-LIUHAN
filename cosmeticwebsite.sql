-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2024-06-01 07:13:07
-- 服务器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `cosmeticwebsite`
--

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE `cart` (
  `id` int(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `shopid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='购物车';

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`id`, `img`, `title`, `price`, `userid`, `shopid`) VALUES
(3, 'static/picture/32.png', 'All Natural Makeup Beauty Cosmetics', '30.00', '1', '3'),
(4, 'static/picture/43.png', 'On Trend Makeup and Beauty Cosmetics', '20.00', '1', '12');

-- --------------------------------------------------------

--
-- 表的结构 `shop`
--

CREATE TABLE `shop` (
  `id` int(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `originalprice` varchar(255) NOT NULL,
  `briefintroduction` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='商品表';

--
-- 转存表中的数据 `shop`
--

INSERT INTO `shop` (`id`, `img`, `price`, `title`, `originalprice`, `briefintroduction`) VALUES
(1, 'static/picture/14.png', '11.90', 'All Natural Makeup Beauty Cosmetics', '13.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(2, 'static/picture/21.png', '15.80', 'On Trend Makeup and Beauty Cosmetics', '20.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(3, 'static/picture/32.png', '23.90', 'The Cosmetics and Beauty brand Shoppe', '30.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(4, 'static/picture/42.png', '15.80', 'orginal Age Defying Cosmetics Makeup', '20.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(5, 'static/picture/61.png', '20.90', 'All Natural Makeup Beauty Cosmetics', '25.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(6, 'static/picture/8.png', '10.80', 'On Trend Makeup and Beauty Cosmetics', '20.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(7, 'static/picture/9.png', '22.90', 'All Natural Makeup Beauty Cosmetics', '25.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(8, 'static/picture/10.png', '16.80', 'On Trend Makeup and Beauty Cosmetics', '23.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(9, 'static/picture/16.png', '16.90', 'All Natural Makeup Beauty Cosmetics', '19.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(10, 'static/picture/23.png', '12.80', 'On Trend Makeup and Beauty Cosmetics', '15.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(11, 'static/picture/33.png', '21.90', 'All Natural Makeup Beauty Cosmetics', '30.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            '),
(12, 'static/picture/43.png', '10.80', 'On Trend Makeup and Beauty Cosmetics', '20.00', 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream.\r\n            ');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avter` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='用户表';

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `avter`, `email`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg', 'yxlform@163.com');

--
-- 转储表的索引
--

--
-- 表的索引 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
