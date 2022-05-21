import {useState, useEffect, useRef} from 'react';

interface State<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
}

export const useFetch = <T extends Object>(url: string) => {
  const isMounted = useRef<boolean>(true);
  const [state, setState] = useState<State<T>>({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted.current) {
          setState({loading: false, error: null, data});
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'could not load the data',
        });
      });
  }, [url]);

  return state;
};
