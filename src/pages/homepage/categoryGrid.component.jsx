import category from "../../category/category";
import { Grid, Paper, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		margin: theme.spacing(1),
	},
	[theme.breakpoints.up("md")]: {
		margin: theme.spacing(2),
	},
	[theme.breakpoints.down("sm")]: {
		margin: theme.spacing(0),
	},
}));

const GridItem = ({ type, image }) => {
	const StyledPaper = styled(Paper)(({ theme }) => ({
		borderRadius: "1px",
		height: "400px",
		width: "100%",
		backgroundImage: `url(${image})`,
		backgroundPosition: "center center",
		backgroundSize: "cover",
	}));

	const handleClick = () => {
		console.log("something is clicked");
	};

	return (
		<Grid item xs={12} sm={12} md={6} lg={4} onClick={handleClick}>
			<StyledPaper>
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					sx={{ height: "100%", cursor: "pointer" }}
				>
					<Grid item>
						<Typography variant='h2' sx={{ color: "#fffffe" }}>
							{type.toUpperCase()}
						</Typography>
					</Grid>
				</Grid>
			</StyledPaper>
		</Grid>
	);
};

const CategoryGrid = () => {
	return (
		<>
			<StyledBox>
				<Grid container spacing={0.5}>
					{category.map((item) => {
						return (
							<GridItem
								type={item.type}
								image={item.image}
								key={item.id}
							/>
						);
					})}
				</Grid>
			</StyledBox>
		</>
	);
};

export default CategoryGrid;
