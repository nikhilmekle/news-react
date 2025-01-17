import React, { Component } from 'react'

export class NewsItem extends Component {


	render() {
		let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
		return (
			<div className='my-3'>
				<div className="card" >
					
						<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"85%",zIndex:"1"}}>
							{source}
						</span>
				
					<img alt=' ' src={imageUrl} />
					<div className="card-body">
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">{description}...</p>
						<p className='card-text'><small className='text-muted'>by {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
						<a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark	btn-sm">Read more</a>

					</div>
				</div>
			</div>
		)
	}
}

export default NewsItem
