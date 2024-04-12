import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/crud/allCrud';

export const fetchData = async (collectionName, pipeline) => {
  console.log("pipeline",pipeline)
    try {
        const response = await axios.post(`${BASE_URL}`, {
          collectionName,
          pipeline,
          type : "get"
        });
        return response.data;
      } catch (error) {
        console.error('Error getting data:', error);
        throw new Error('Failed to get data');
      }
  };

export const addData = async (collectionName, document) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      collectionName,
      document,
      type : "insert"
    });
    return response.data;
  } catch (error) {
    console.error('Error adding data:', error);
    throw new Error('Failed to add data');
  }
};


export const deleteData = async (collectionName, filters) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      collectionName,
      filters,
      type : "delete"
    });
    return response.data;
    enqueueSnackbar('This is a success message!', { variant });
  } catch (error) {
    console.error('Error deleting data:', error);
    throw new Error('Failed to delete data');
  }
};
export const update = async (collectionName, filters) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      collectionName,
      filters,
      type : "update"
    });
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw new Error('Failed to updating data');
  }
};
