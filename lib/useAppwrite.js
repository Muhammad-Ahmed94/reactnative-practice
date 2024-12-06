import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const useAppWrite = (fn) => {

  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);

  //*Fetch data from DB function
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
      setData(response)
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //*Fetch on intial render
  useEffect(() => {
    fetchData();
  }, []);

  //*Fetch on pull-down refresh
  const reloadRefetch = () => fetchData();

  return { data, reloadRefetch, loading }
};

export default useAppWrite