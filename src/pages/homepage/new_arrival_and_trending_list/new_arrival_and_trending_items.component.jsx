import "./NewAndTrendingItems.css";

// dummy data starts
import productOne from "./DummyData/hmgoepprod.jpg";
import productTwo from "./DummyData/hmgoepprod1.jpg";
import productThree from "./DummyData/hmgoepprod2.jpg";
import productFour from "./DummyData/hmgoepprod3.jpg";
import productFive from "./DummyData/hmgoepprod4.jpg";
// dummy data ends

const NewAndTrendingItems = (props) => {
	return (
		<div>
			{/* Heading for the list*/}
			<div className='list-heading'>{props.heading}</div>
			<div class='container'>
				<ul class='product-list'>
					<li>
						<div class='card'>
							<div class='upper-portion'>
								<img src={productOne} alt='something' />
							</div>
							<div class='lower-portion'>
								<span class='product-title'>
									Relaxed Fit Cotton joggers
								</span>
								<span class='product-price'>Rs.599.00</span>
							</div>
						</div>
					</li>
					<li>
						<div class='card'>
							<div class='upper-portion'>
								<img src={productTwo} alt='something' />
							</div>
							<div class='lower-portion'>
								<span class='product-title'>
									Relaxed Fit Cotton T-shirt
								</span>
								<span class='product-price'>Rs.799.00</span>
							</div>
						</div>
					</li>
					<li>
						<div class='card'>
							<div class='upper-portion'>
								<img src={productThree} alt='something' />
							</div>
							<div class='lower-portion'>
								<span class='product-title'>
									Relaxed Fit Cotton joggers
								</span>
								<span class='product-price'>Rs.599.00</span>
							</div>
						</div>
					</li>
					<li>
						<div class='card'>
							<div class='upper-portion'>
								<img src={productFour} alt='something' />
							</div>
							<div class='lower-portion'>
								<span class='product-title'>
									Relaxed Fit Cotton joggers
								</span>
								<span class='product-price'>Rs.599.00</span>
							</div>
						</div>
					</li>
					<li>
						<div class='card'>
							<div class='upper-portion'>
								<img src={productFive} alt='something' />
							</div>
							<div class='lower-portion'>
								<span class='product-title'>
									Relaxed Fit Cotton joggers
								</span>
								<span class='product-price'>Rs.599.00</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NewAndTrendingItems;
