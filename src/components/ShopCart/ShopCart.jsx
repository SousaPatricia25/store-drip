import './ShopCart.css'
export const  ShopCart= ({value}) => {
  return(
    <div className="box-shop-cart">
      <a hef="">
        <img src="../../../public/ShopCart.svg.svg" />
      </a>
      <span>{value}</span>
    </div>
  );
}