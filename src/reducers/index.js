const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  filtersLoadingStatus: 'idle',
  activeFilter: 'all',
  filteredHeroes: [],
};

const reducer = (state = initialState, action) => {
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
        filteredHeroes:
          state.activeFilter === 'all'
            ? action.payload
            : action.payload.filter(
                (item) => item.element === state.activeFilter
              ),
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'FILTERS_FETCHING':
      return {
        ...state,
        filtersLoadingStatus: 'loading',
      };
    case 'FILTERS_FETCHED':
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: 'idle',
      };
    case 'FILTERS_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'ACTIVE_FILTER_CHANGED':
      return {
        ...state,
        activeFilter: action.payload,
        filteredHeroes:
          action.payload === 'all'
            ? state.heroes
            : state.heroes.filter((item) => item.element === action.payload),
      };
    // Самая сложная часть - это показывать новые элементы по фильтрам
    // при создании или удалении
    case 'ADD_HERO':
      // Формируем новый массив
      console.log('reducer_add', action.payload, state.heroes);
      let newAddHeroList = [...state.heroes, action.payload];
      return {
        ...state,
        heroes: newAddHeroList,
        // Фильтруем новые данные по фильтру, который сейчас применяется
        filteredHeroes:
          state.activeFilter === 'all'
            ? newAddHeroList
            : newAddHeroList.filter(
                (item) => item.element === state.activeFilter
              ),
      };
    case 'REMOVE_HERO':
      console.log('reducer_remove', action.payload, state.heroes);
      // Формируем новый массив
      const newHeroList = state.heroes.filter(
        (hero) => hero.id !== action.payload
      );
      return {
        ...state,
        heroes: newHeroList,
        filteredHeroes:
          state.activeFilter === 'all'
            ? newHeroList
            : newHeroList.filter((item) => item.element === state.activeFilter),
      };
    default:
      return state;
  }
};

export default reducer;
