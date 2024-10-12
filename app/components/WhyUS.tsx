"use client"
export const WhyChooseFreshRoots = () => {
	return (
		<section
			id="why-choose-us"
			className="relative py-16 md:py-24 bg-gradient-to-r from-[#E6F5E1] to-[#c8e6c9] overflow-hidden"
		>
			<div className="container mx-auto px-6 lg:px-8 relative z-10">
				{/* Decorative Shapes */}
				<div className="absolute top-0 left-0 w-32 h-32 bg-[#28a745] rounded-full opacity-20 blur-lg"></div>
				<div className="absolute bottom-0 right-0 w-40 h-40 bg-[#28a745] rounded-full opacity-20 blur-lg"></div>

				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-5xl font-extrabold text-[#2a5934] md:text-6xl">
						Why Choose Fresh Roots?
					</h2>
					<p className="text-xl text-[#4b4b4b] max-w-2xl mx-auto mt-4">
						Discover the premium, exclusive, and healthful benefits of our organic, chemical-free farm produce!
					</p>
				</div>

				{/* Premium Benefits Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
					{/* Premium Benefit 1 */}
					<div className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
						<div className="mb-4">
							<img
								src="/icons/organic.svg"
								alt="Premium Organic"
								className="w-12 h-12 mx-auto mb-4"
							/>
							<h3 className="text-2xl font-bold text-[#28a745] text-center">Premium & Exclusive</h3>
						</div>
						<p className="text-center text-[#4b4b4b]">
							Our products are exclusively curated for select families, offering a farm-to-table experience you won’t find anywhere else.
						</p>
					</div>

					{/* Premium Benefit 2 */}
					<div className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
						<div className="mb-4">
							<img
								src="/icons/chemical-free.svg"
								alt="Chemical-Free"
								className="w-12 h-12 mx-auto mb-4"
							/>
							<h3 className="text-2xl font-bold text-[#28a745] text-center">Chemical-Free Farming</h3>
						</div>
						<p className="text-center text-[#4b4b4b]">
							We use sustainable, eco-friendly farming practices to grow produce free of harmful chemicals and pesticides.
						</p>
					</div>

					{/* Premium Benefit 3 */}
					<div className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
						<div className="mb-4">
							<img
								src="/icons/health-benefits.svg"
								alt="Health Benefits"
								className="w-12 h-12 mx-auto mb-4"
							/>
							<h3 className="text-2xl font-bold text-[#28a745] text-center">Health Benefits</h3>
						</div>
						<p className="text-center text-[#4b4b4b]">
							Organic food is proven to have more nutrients and antioxidants—fuel your body with the best from nature.
						</p>
					</div>
				</div>

				{/* Dynamic Scrolling Testimonials */}
				<div className="relative">
					<h3 className="text-3xl font-bold text-center text-[#28a745] mb-8">What Our Customers Say</h3>
					<div className="overflow-x-auto flex space-x-6 pb-4">
						{/* Testimonial 1 */}
						<div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-lg transition-transform hover:scale-105">
							<p className="text-lg italic text-[#4b4b4b]">
								"Fresh Roots Farm has completely changed how we eat. Their produce is fresh, delicious, and I feel healthier!"
							</p>
							<span className="block mt-4 text-[#2a5934] font-semibold">- Priya R., Pune</span>
						</div>

						{/* Testimonial 2 */}
						<div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-lg transition-transform hover:scale-105">
							<p className="text-lg italic text-[#4b4b4b]">
								"We’ve never tasted vegetables this fresh! It’s like we’re eating right from the garden."
							</p>
							<span className="block mt-4 text-[#2a5934] font-semibold">- Rahul S., Mumbai</span>
						</div>

						{/* Testimonial 3 */}
						<div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-lg transition-transform hover:scale-105">
							<p className="text-lg italic text-[#4b4b4b]">
								"The quality is unmatched, and we love knowing our food is chemical-free and sustainable."
							</p>
							<span className="block mt-4 text-[#2a5934] font-semibold">- Neha D., Pune</span>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative Element */}
			<div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#a5d6a7] to-[#81c784] opacity-30 rounded-full blur-lg"></div>
		</section>
	);
};
