import { useCallback } from 'react';

export const useHttp = () => {
  // const [process, setProcess] = useState('waiting');

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      // setProcess('loading');

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch (e) {
        // setProcess('error');
        throw e;
      }
    },
    []
  );

  // const clearError = useCallback(() => {
  // setProcess('loading');
  // }, []);

  return {
    request,
    // clearError,
    // process,
    // setProcess
  };
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
