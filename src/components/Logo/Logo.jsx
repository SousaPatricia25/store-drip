import './Logo.css';

export const Logo = ({color, margin}) => {
  return(
    <div>
      <a style={{margin: margin}} className= "logo" href="">
        <img src={!color ?  "../../../public/logorosa.svg.svg" : '../../../public/logobranca.svg.svg'} />
        <span style={{color: color}}>Drip Store</span>
      </a>
    </div>
  );
}