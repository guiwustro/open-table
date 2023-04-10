import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const Search = () => {
	return (
		<>
			<Header />
			<div className="flex py-4 m-auto w-2/3 justify-between items-start">
				<SearchSideBar />
				<div className="w-5/6">
					<RestaurantCard />
				</div>
			</div>
		</>
	);
};

export default Search;
