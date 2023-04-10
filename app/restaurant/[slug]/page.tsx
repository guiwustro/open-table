import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

const RestaurantDetails = () => {
	return (
		<>
			<div className="bg-white w-[70%] rounded p-3 shadow">
				<RestaurantNavBar />
				<Title />
				<Rating />
				<Description />
				<Images />
				<Reviews />
			</div>
			<div className="w-[27%] relative text-reg">
				<ReservationCard />
			</div>
		</>
	);
};

export default RestaurantDetails;
