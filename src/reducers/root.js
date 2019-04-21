const intialState = {
	props: [
		{id: '1', title: "mc", body: "sher"},
		{id: '2', title: "gully", body: "boy"},
		{id: '3', title: "kaam", body: "bhari"}
	]	
}

const root = (state = intialState, action) =>
{
	return state;
}

export default root;