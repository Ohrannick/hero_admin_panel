const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'ADD_HERO':
      console.log('reducer_add', action.payload, state.heroes);
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
      };
    case 'REMOVE_HERO':
      console.log('reducer_remove', action.payload, state.heroes);
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
      };
    default:
      return state;
  }
};

export default heroes;