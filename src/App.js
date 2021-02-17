import './App.css';
import Row from './components/RowComponent';
import request from './components/request';
import Banner from './components/BannerComponent';
function App() {
  return (
    <div className="app">
      <Banner />
      <center>
        <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      </center>
    </div>
  );
}

export default App;
