import React, { useEffect } from 'react';
import Loading from '../Loading/Loading';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { getCharacters, getCharactersLoading } from '../../store/selectors';
import { setCharactersData, setCharactersLoading } from '../../store/actions';
import { useDispatch } from 'react-redux';

const Characters = (props) => {
  const isLoading = useSelector(getCharactersLoading)
  const characters = useSelector(getCharacters)
  const dispatch = useDispatch()

  useEffect(() => {
    const {characters} = props
    const requests = characters.map(el => axios(el))
    Promise.all(requests).then( res => {
      const newArray = res.map(it => it.data)
      dispatch(setCharactersData(newArray))
      dispatch(setCharactersLoading(false))
    })
  }, [])

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div>
      Characters:
      {characters.map(el => {
        return (
          <div key={el.id}>
            {el.name}
          </div>
        )
      })}
    </div>
  );
}

export default Characters;
