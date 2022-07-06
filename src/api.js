import axios from 'axios';
const axiosGQL = axios.create({
  baseURL: 'http://localhost:3000/'
});
   
const Get_All_Products_Query = `
  {
    allProducts {
      id,
      name,
      description, 
      image, 
      price, 
      rating, 
      isAvailable
    }
  }
`;
function getAllProducts() {
  return axiosGQL
    .post('', { query: Get_All_Products_Query })
    .then(getData)
    .then(data => data.allProducts);
};
function getData(response){
  return response.data.data;
}
export default { getAllProducts };