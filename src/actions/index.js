export const heroesFetching = () => {
  return {
    type: 'HEROES_FETCHING',
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: 'HEROES_FETCHED',
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: 'HEROES_FETCHING_ERROR',
  };
};

export const removeHero = (id) => {
  console.log('actions', id);
  return {
    type: 'REMOVE_HERO',
    payload: id,
  };
};

export const addHero = (hero) => {
  console.log('actions', hero);
  return {
    type: 'ADD_HERO',
    payload: hero,
  };
};
