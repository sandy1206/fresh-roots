import { AboutUs } from "./components/AboutUs";
import { Hero } from "./components/Hero";
import { WhyChooseFreshRoots } from "./components/WhyUS";

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs/>
			<WhyChooseFreshRoots/>
		</>
	);
}
