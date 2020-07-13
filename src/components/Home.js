import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends Component
{
	state = {
		posts: []
	}

	componentDidMount()
	{
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res =>
		{			
			this.setState({
				posts: res.data.slice(0,10)
			});
		});
	}

	render()
	{
		const posts = this.state.posts;

		const postList = posts.length ? (
			posts.map(post =>
				{
					return(
						<div key={post.id} >
							<div className="card" >
								<Link to={'/' + post.id}>
									<div className="card-header bg-primary text-white">{post.title}</div>
								</Link>								
								<div className="card-body">{post.body}</div> 								
							</div>
							<br />
						</div>						
					)
				})) : (<div className="center">No posts found</div>)
		return(
			<div className="container">
				<h1>Home</h1>
				{postList}
			</div>
		)
	}
}

export default Home;