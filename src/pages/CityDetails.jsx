import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import actionsCity from '../storeRedux/actionRedux/cities';
import DetailsCity from '../components/DetailCity.jsx';

const { cityDetailRead } = actionsCity;

export default function CityDetails() {
  const { city_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cityDetailRead({ id: city_id }));
  }, [dispatch, city_id]);

  const city = useSelector((store) => store.cities.city);

  return (
    <>
      <DetailsCity city={city} />
    </>
  );
}
