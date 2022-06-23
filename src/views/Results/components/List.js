import ListItem from "./ListItem";


const List = ({ data, onListItemClick }) => {
  return data?.map(movie => (
    <>
      {
        movie.title ? 
        <ListItem key={movie.id} {...movie} onListItemClick={onListItemClick} />
        : null
      }
    
    </>
  ))
}

export default List;