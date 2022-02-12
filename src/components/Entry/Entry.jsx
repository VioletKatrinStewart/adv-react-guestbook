export default function Entry({ entry: { name, message, image } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{message}</p>
      <img src={image} />
    </div>
  );
}
