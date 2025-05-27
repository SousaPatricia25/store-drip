import {Logo} from '../Logo/Logo';
import './Header.css';
import {Button} from '../Button/Button';

export const Header = () => {
  return(
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={'0.5rem 0 0 0.25rem'}/>
        </div>
        <Button
          width={'7.125rem'}
          heigth={'2.5rem'}
          color={'#C92071'}
        >Enviar</Button>
      </div>
    </header>
  );
}