import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component
{
	state = 
	{		
		post:null
	}

	componentDidMount()
	{
		let post_id = this.props.match.params.post_id;

		axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
		.then(res =>
		{
			this.setState({
				post: res.data
			});
		});		
	}

	render()
	{
		const post = this.state.post ? (
			<div key={this.state.post.id} >
				<div className="card" >
					<div className="card-header bg-primary text-white">{this.state.post.title}</div>						
					<div className="card-body">{this.state.post.body}</div> 								
				</div>
				<br />
			</div>		
		) : (<div className="center">Post does not exist</div>)
		return(
			<div className="container">
				{post}
			</div>
		)
	}
}

export default Post;