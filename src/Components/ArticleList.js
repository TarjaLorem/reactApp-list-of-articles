import React from 'react';
import Article from './Article';


export default function ArticleList({ articles }) {
  const articleElements = articles.map(article => 
    <li key= {article.id}><Article article = {article} /></li>
  )
  return (
    <ul>
      {articleElements}
    </ul>
  )
}
// class ArticleList extends Component {
//   render() {
//     if (this.props.articles) {
//     const articleElem = this.props.articles.map(article =>
//       <li><Article article = { article }/></li>
      
//     )
//     return ( 
//     <ul>{articleElem}</ul> 
//   );
//   }
//  }
// }

// export default ArticleList;


// export default function ArticleList({ articles }) {
//   if (this.props.articles) {
//   const articleElem = articles.map(article =>
// 		<li key = { article.id }><Article article = { article }/></li>
// 	)
//   return (
//     <ul>{articleElem}</ul>
//   )
// }

// }
