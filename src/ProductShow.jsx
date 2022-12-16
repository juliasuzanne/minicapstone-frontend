export function ProductShow(props) {
  let imageUrls = [];
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
    </div>
  );
}
