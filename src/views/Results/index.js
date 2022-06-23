import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import moviesImage from '../../assets/movie-theater.png';
import { useFetchMoviesQuery } from "../../redux/api/movies";
import Loading from "./components/Loading";
import List from "./components/List";
import Error from "./components/Error";

const Results = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { data: movies, error, isLoading, isSuccess, isFetching } = useFetchMoviesQuery(title);
  
  const handleListItemClick = (movieId) => {
    navigate(`/detail/${movieId}`)
  }

  const renderContent = () => {
    if(error) {
      return <Error error={error} />
    }else if(isLoading || isFetching){
      return <Loading />
    }else if(isSuccess && movies?.results){
      return <List data={movies?.results} onListItemClick={handleListItemClick} />
    }
  }

  return (
    <div className="flex flex-row">
      <div className="w-3/5 h-screen overflow-y-auto px-10">
        {renderContent()}
      </div>
      <div className="w-2/5">
        <img 
          src={moviesImage} 
          alt='Movies' 
          className="w-full h-screen object-cover" 
        />
      </div>
    </div>
  )
}

export default Results;