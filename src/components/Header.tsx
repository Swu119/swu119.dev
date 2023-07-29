import { Flex, Center, Image } from '@chakra-ui/react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = ({ navids }: { navids: string[] }) => {
  return (
    <Center
      display='flex'
      align-items='center'
      position='sticky'
      top='-5px'
      zIndex='2'
      height='70px'
      min-height='70px'
      width='100%'
      background='black'
      padding='0 1rem'
      box-shadow='0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%)'
    >
      <Flex
        h='100%'
        w='100%'
        alignContent={'center'}
        position={'relative'}
        zIndex={'3'}
        color={'white'}
      >
        <nav className='nav__container'>
          <ul>
            {navids.map((navid, idx) => (
              <li>
                <Link
                  key={idx}
                  activeClass='active'
                  smooth
                  spy
                  to={navid}
                >
                  {navid}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Flex>
    </Center>
  );
};

export default Header;
