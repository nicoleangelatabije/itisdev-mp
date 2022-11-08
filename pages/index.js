import Link from "next/link";
import React from "react";
import dbConnect from "../lib/dbConnect";
import Pet from "../models/Pet";

const Index = () => (
	<>
		<div>
			<p>Hello World</p>
		</div>
	</>
);

/* Retrieves pet(s) data from mongodb database */
// export async function getServerSideProps() {

// 	await dbConnect();

// 	/* find all the data in our database */
// 	const result = await Pet.find({});
// 	const pets = result.map((doc) => {
// 		const pet = doc.toObject();
// 		pet._id = pet._id.toString();
// 		return pet;
// 	});

// 	return { props: { pets: pets } };
// }

export default Index;
