import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";

function App() {
	return (
		<Router>
			<Navbar />

			<div className="main__container">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/gallery" element={<Gallery />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;