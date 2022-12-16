export function ProductShow(props) {
  let imageUrls = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h2> {props.product.name} </h2>
      <p> ID: {props.product.id} </p>
      <p> {props.product.price} </p>
      <p> {props.product.description}</p>
      {props.product.images.forEach((pic) => imageUrls.push(pic.url))}
      {console.log(imageUrls[0])}
      <img src={imageUrls[0]} width="200" />
      <img src={imageUrls[1]} width="200" />
      <img src={imageUrls[2]} width="200" />

      <h2> Edit Product </h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="decimal" />
        </div>
        <div>
          QTY in stock: <input defaultValue={props.product.inventory} name="inventory" type="integer" />
        </div>
        <div>
          Supplier ID: <input defaultValue={props.product.supplier_id} name="supplier_id" type="integer" />
        </div>

        <button type="submit">Submit Changes</button>
      </form>

      <button onClick={handleClick}> Delete Product</button>
    </div>
  );
}
