import React, {Component} from 'react'

class Post extends Component
{
	state = 
	{
		id: null
	}

	componentDidMount()
	{
		let post_id = this.props.match.params.post_id;

		this.setState({
			id: post_id
		});
	}

	render()
	{
		return(
			<div className="container">
				{this.state.id}
			</div>
		)
	}
}

export default Post;