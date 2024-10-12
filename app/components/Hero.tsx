import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
	src: string;
	alt?: string;
};

type Props = {
	heading: string;
	description: string;
	buttons: ButtonProps[];
	image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Hero = (props: Header1Props) => {
	const { heading, description, buttons, image } = {
		...Header1Defaults,
		...props,
	} as Props;

	return (
		<section id="relume" className="bg-[#f4f4ec] px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
					<div>
						<h1 className="mb-5 text-4xl font-extrabold text-[#2a5934] md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl animate-fadeIn">
							<span className="text-[#28a745]">Organic Vegetables</span> Grown on Our Farm,
							<span className="text-[#28a745]"> Delivered Fresh</span> to Your Door
						</h1>
						<p className="text-lg text-[#4b4b4b] md:text-xl animate-fadeIn">
							Experience the taste of fresh, <span className="font-bold text-[#28a745]">chemical-free</span> produce, sustainably grown with love at Fresh Roots Farm.
						</p>
						<div className="mt-6 flex justify-center md:mt-8">
							<Button
								{...buttons[0]}
								className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out bg-gradient-to-r from-[#28a745] to-[#218838] border border-transparent rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#218838] focus:ring-opacity-50 group"
							>
								<span className="absolute left-0 w-full h-full transition-all duration-300 transform bg-[#1e7a2b] rounded-full scale-0 group-hover:scale-100"></span>
								<span className="relative">Discover Freshness</span>
							</Button>

						</div>
					</div>
					<div>
						<img
							src="/hero.png" // Updated to use your downloaded image
							className="w-full h-auto rounded-lg shadow-lg object-cover scale-105 transition-transform duration-300 hover:scale-110"
							alt={image.alt}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Header1Defaults: Header1Props = {
	heading: "Organic Vegetables Grown on Our Farm, Delivered Fresh to Your Door",
	description:
		"Experience the taste of fresh, chemical-free produce, sustainably grown with love at Fresh Roots Farm.",
	buttons: [
		{ title: "Discover Freshness", variant: "primary" }, // Updated CTA
	],
	image: {
		src: "/hero.png", // This will not be used since you're directly setting the image in the hero
		alt: "Fresh vegetables",
	},
};
