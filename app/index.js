import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import quotes from './quotes'

class Quotes extends Component {
	render() {
		const q = quotes.map((a,i) =>
									<div className="quotes" key={i}>
										<blockquote className="quote">
											{a.quote}
											<cite className="author">{a.author}</cite>
										</blockquote>
									</div>
							)
		return (
				<div>
					<h1>Quotes React</h1>
					{q}
				</div>
			)
	}
}

ReactDOM.render(<Quotes />, document.getElementById('app'));
