import React, { Component } from 'react';

class Article extends Component {
	handleClick = () => {//експреементальний синтаксис
		this.setState ({//міняю стан компоненти, операція асинхронна
			isOpen: !this.state.isOpen
		})
	}
  state = { //стан компоненти 
		isOpen: false
	}
  render() {
		const {article} = this.props
		const articletext = this.state.isOpen && <span className="article-text">{article.text}</span>//два стана, в яких знаходиться компонента
    return (
      <div className="App-article">
				<span className="article-title">Theme: {article.title}</span> <button onClick={this.handleClick} className="article-close-btn">
				{this.state.isOpen ? 'Close': 'Open'}</button>
				{articletext}
				<span className="author-desc">Author: {article.authorName}</span>
      </div>
		);
		
	}
}

export default Article;