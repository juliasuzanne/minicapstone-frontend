export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div className="form" id="newproduct">
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Price: <input name="price" type="decimal" />
        </div>
        <div>
          QTY in stock: <input name="inventory" type="integer" />
        </div>
        <div>
          Supplier ID: <input name="supplier_id" type="integer" />
        </div>

        <button type="submit">Submit New Product</button>
      </form>
    </div>
  );
}
