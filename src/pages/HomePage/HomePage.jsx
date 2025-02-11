// libs
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// redux
import { fetchFilmByName } from '../../redux/slices/filmsSlice';

// styles
import classes from './styles.module.css';

export default function HomePage() {
  const disptach = useDispatch();

  useEffect(() => {
    disptach(fetchFilmByName("Killer Bean"));
  }, []);

  return (
    <div className={classes.root}>
      (HomePage)
    </div>
  )
}