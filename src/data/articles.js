import React from "react";

function article_1() {
	return {
		date: "7 Aug 2023",
		title: "Simplifyed Checkout Extension Post Purchse Upsell Offers",
		description:
			"A post-purchase product offer is an additional sales opportunity that's displayed to customers immediately after they complete checkout. This guide introduces post-purchase checkout extensions, which allow merchants to add a post-purchase page directly into the Shopify checkou",
		keywords: [
			"The Benefits of Cloud Computing",
			"Mohit",
			"Mohit Lekhrajani",
			"Mohit Software Developer",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						The customer goes to the payment information page.{" "}
						<br></br>The page loads the{" "}
						<code
							style={{
								backgroundColor: "#8fffff",
								height: "40px",
								padding: "0.2%",
							}}
						>
							Checkout::PostPurchase::ShouldRender
						</code>{" "}
						extension point. <br />
						Optional: The extension makes a network call to your app
						server to obtain any data needed for the post-purchase
						page. The extension can store data in the browser's
						local storage, speeding up the time to the first render.
						The extension returns the result of render to the
						payment information page. For render to be true, all the
						required conditions must be met. For example, the
						customer's credit card must be vaulted before the
						post-purchase offer is displayed. The customer completes
						checkout.
						<br />
						If render returns true, then the post-purchase page
						loads the{" "}
						<code
							style={{
								backgroundColor: "#8fffff",
								height: "40px",
								padding: "0.2%",
							}}
						>
							Checkout::PostPurchase::Render
						</code>{" "}
						extension point. Any stored data is directly available
						to the render extension point.
						<br /> You app needs to call done to redirect the
						customer to the order status page.
						<br />
					</div>
					<img
						src="/articleone.png"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Mohit",
			"Mohit Lekhrajani",
			"Mohit Software Developer",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
