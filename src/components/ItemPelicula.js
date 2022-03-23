const ItemPelicula = ({ titulo, imagen }) => {
  return (
    <div>
      <div>
        <img src={imagen}></img>
      </div>
      <h3>{titulo}</h3>
      <p>icono</p>
    </div>
  );
};

export default ItemPelicula;
