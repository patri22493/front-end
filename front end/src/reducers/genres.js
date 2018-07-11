const genres = (state = [], action) => {
  const genereListAfterDelete=state.slice();
  const genereListAfterUpdate=state.slice();

  switch (action.type) {
      case 'CREATE_GENRES_REQUEST':
        return state;
      case 'CREATE_GENRES_SUCCESS':
        return state.concat(action.genre);
      case 'CREATE_GENRES_ERROR':
    default:
      return state;

      case 'DELETE_GENRES_REQUEST':
        return state;
      case 'DELETE_GENRES_SUCCESS':

        genereListAfterDelete.map(name =>{

          if(name._id===action.genre){
            console.log(name);
            return genereListAfterDelete
                .splice(genereListAfterDelete
                    .indexOf(name),1);
          }
        });

        return genereListAfterDelete;
      case'DELETE_GENRES_ERROR':
        return state;



      case 'GET_GENRES_REQUEST':
        return state;
      case 'GET_GENRES_SUCCESS':
        return action.genres;
      case 'GET_GENRES_ERROR':
        return state;

      case 'UPDATE_GENRES_REQUEST':
        return state;
      case 'UPDATE_GENRES_SUCCESS':
        genereListAfterUpdate.map(elem=>{
          if(elem._id===action.genre._id){
            elem.name=action.genre.name;
          }
        });
        return genereListAfterDelete;

      case 'UPDATE_GENRES_ERROR':
        return state;
  }
};

export default genres;
