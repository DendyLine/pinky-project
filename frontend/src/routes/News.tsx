import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from 'src/components/Pagination';
import { fetchNews } from 'src/redux/newsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { fetchUsers } from 'src/redux/usersSlice';


const News = () => {
  const dispatch = useAppDispatch()
  const {newsList, totalNewsCount} = useAppSelector(state => state.news)
  const {search} = useLocation()
  useEffect(()=>{
      const params = new URLSearchParams(search);
      const currentPage = Number(params.get('page') ?? 1)
      dispatch(fetchNews(currentPage))
  },
    [search]);
  return (
    <div>
      <div>
        <Pagination numOfPages={Math.ceil(totalNewsCount / 3)}/>
      </div>
      {newsList.map(news =>(
        <div>
          {news.text}{news.like}
        </div>
      ))}
    </div>
  );

};

export default News;