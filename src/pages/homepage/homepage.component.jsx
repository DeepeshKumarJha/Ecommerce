import CategoryGrid from "./categoryGrid.component";
import NewAndTrendingItems from "./new_arrival_and_trending_list/new_arrival_and_trending_items.component";

const Homepage = () => {
	return (
		<>
			<NewAndTrendingItems heading='New Arrivals' />
			<NewAndTrendingItems heading='Trending' />
			<CategoryGrid />
		</>
	);
};

export default Homepage;
