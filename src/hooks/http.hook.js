export const useHttp = () => {
  const request = async (
    url,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};

// "heroes": [
//   {
//     "id": 1,
//     "name": "Первый герой",
//     "description": "Первый герой в рейтинге!",
//     "element": "fire"
//   },
//   {
//     "id": 2,
//     "name": "Неизвестный герой",
//     "description": "Скрывающийся в тени",
//     "element": "wind"
//   },
//   {
//     "id": 3,
//     "name": "Морской герой",
//     "description": "Как аквамен, но не из DC",
//     "element": "water"
//   }
// ],
