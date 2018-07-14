import React from 'react';
import './App.css';
import ArticleList from './Components/ArticleList';
import articles from './exportData';

function App() {
  return (
    <div>
      <h1>App name</h1>
      <ArticleList articles = {articles} />
    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Articles</h1>
//         </header>
//         <span className="lists-title">List of articles</span>
//         <ArticleList article={articles}/>
//       </div>
//     );
//   }
// }

export default App;
