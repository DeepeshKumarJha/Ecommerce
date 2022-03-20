import "./NewAndTrendingItems.css";

// dummy data starts
import productOne from "./DummyData/hmgoepprod.jpg";
import productTwo from "./DummyData/hmgoepprod1.jpg";
import productThree from "./DummyData/hmgoepprod2.jpg";
import productFour from "./DummyData/hmgoepprod3.jpg";
import productFive from "./DummyData/hmgoepprod4.jpg";

// dummy data ends

const dummyData = [
	{
		id: "p01",
		name: "product one",
		image: productOne,
		price: 599.0,
	},
	{
		id: "p02",
		name: "second product",
		image: productTwo,
		price: 799.0,
	},
	{
		id: "p03",
		name: "product third",
		image: productThree,
		price: 1599.0,
	},
	{
		id: "p04",
		name: "fourth product",
		image: productFour,
		price: 1099.0,
	},
	{
		id: "p05",
		name: "product fifth",
		image: productFive,
		price: 499.0,
	},
];

const SingleCard = (props) => {
	const handleCardClick = () => {
		console.log(`${props.item.id} card is clicked`);
	};

	return (
		<li onClick={handleCardClick}>
			<div className='card'>
				<div className='upper-portion'>
					<img src={props.item.image} alt='something' />
				</div>
				<div className='lower-portion'>
					<span className='product-title'>{props.item.name}</span>
					<span className='product-price'>Rs.{props.item.price}</span>
				</div>
			</div>
		</li>
	);
};

const NewAndTrendingItems = (props) => {
	return (
		<div>
			{/* Heading for the list*/}
			<div className='list-heading'>{props.heading}</div>
			<div className='container'>
				<ul className='product-list'>
					{dummyData.map((item) => (
						<SingleCard item={item} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default NewAndTrendingItems;
