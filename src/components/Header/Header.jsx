import {Logo} from '../Logo/Logo';
import {Button} from '../Button/Button';
import {ShopCart} from '../ShopCart/ShopCart';
import {Input} from '../Input/Input';
import {Useful} from '../Useful/Useful';
import './Header.css';

export const Header = () => {

  return(
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={'0.5rem 0 0 0.25rem'}/>
          <Input
           type={'text'}
           placeholder={'Pesquisar produto...'}
           margin={'0 3rem 0 1.668rem'}
           width={'34.938rem'}
           height={'3.75rem'}
           src={"../../../public/Search.svg"}
          />
          <Useful
            value={'Cadastre-se'}
            margin={'1.2rem 0 0 0'}
            color={'#474747'}
            href={'#'}
            textDecoration={'underline'}
          />
        </div>
        <Button
          width={'7.125rem'}
          height={'2.5rem'}
          margin={'2.75rem 0 0 1.875rem'}
        >Enviar</Button>
        <ShopCart value={2}/>
      </div>
    </header>
  );
}