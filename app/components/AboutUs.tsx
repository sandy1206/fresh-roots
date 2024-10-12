export const AboutUs = () => {
	return (
		<section
			id="about-us"
			className="bg-[#e8f5e9] px-[5%] py-16 md:py-24 lg:py-28 relative"
		>
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-extrabold text-[#2a5934] md:text-5xl lg:text-6xl">
						About Fresh Roots Farm
					</h2>
					<p className="text-lg text-[#4b4b4b] md:text-xl mt-4 max-w-3xl mx-auto">
						At Fresh Roots Farm, we are dedicated to growing organic, chemical-free produce that is good for you and for the planet.
					</p>
				</div>

				{/* Mission, Vision, and Values as Cards */}
				<div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 gap-x-6">
					<div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
						<h3 className="text-2xl font-semibold text-[#28a745] mb-4">Our Mission</h3>
						<p className="text-[#4b4b4b]">
							To cultivate and deliver the freshest organic produce while preserving the environment and promoting sustainable farming methods.
						</p>
					</div>
					<div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
						<h3 className="text-2xl font-semibold text-[#28a745] mb-4">Our Vision</h3>
						<p className="text-[#4b4b4b]">
							A healthier and greener planet where every family enjoys fresh, organic, and eco-friendly products directly from the farm.
						</p>
					</div>
					<div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
						<h3 className="text-2xl font-semibold text-[#28a745] mb-4">Our Values</h3>
						<p className="text-[#4b4b4b]">
							Sustainability, transparency, and quality are the core values that guide everything we do at Fresh Roots Farm.
						</p>
					</div>
				</div>

				{/* Certifications Section */}
				<div className="mt-16 text-center">
					<h3 className="text-3xl font-semibold text-[#28a745] mb-6">
						Certified Organic & Eco-Friendly
					</h3>
					<p className="text-lg text-[#4b4b4b] max-w-3xl mx-auto">
						We proudly hold certifications in organic farming and eco-friendly practices, ensuring that our produce is free from harmful chemicals and supports a sustainable future.
					</p>

					{/* Decorative Divider */}
					<div className="w-full h-1 bg-[#28a745] mt-8 mx-auto rounded-full"></div>
				</div>
			</div>
		</section>
	);
};
