import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  useLocalStorage from "./hooks/useLocalStorage"

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

function App() {
	const [isDark, setIsDark] = useLocalStorage('theme', 1);

	return (
		<Router>
			<Navbar isDark={isDark} setIsDark={setIsDark} />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/products" element={<Products />} />
				<Route exact path="/gallery" element={<Gallery />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>

			<Footer />
		</Router>
	);
};

export default App;