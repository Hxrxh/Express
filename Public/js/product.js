const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log("handleform called");
  const product = e.target.productName.value;
  const obj = {
    productName: product,
  };
  axios.post("http://localhost:4000" + "/products", obj).then((result) => {
    console.log(result.data.value);
  });
};
