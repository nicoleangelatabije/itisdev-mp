import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";

const Index = () => (
	<>	
		<h1 className="title">
  			Read <Link href="/signin">Sign In</Link>
		</h1>
		<NavBar></NavBar>
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
