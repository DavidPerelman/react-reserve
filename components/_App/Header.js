import Link from 'next/link';
import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import logo from '../../static/logo.svg';
import styles from './Header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const user = false;

  const isActive = (route) => {
    return route === router.pathname;
  };

  return (
    <Menu fluid id={styles.menu} inverted>
      <Container text>
        <Link href='/'>
          <Menu.Item header active={isActive('/')}>
            <Image
              width={35}
              height={29}
              src={logo}
              alt='logo'
              style={{
                marginRight: '1rem',
              }}
            />
            ReactReserve
          </Menu.Item>
        </Link>

        <Link href='/cart'>
          <Menu.Item header active={isActive('/cart')}>
            <Icon name='cart' size='large' />
            Cart
          </Menu.Item>
        </Link>

        {user && (
          <Link href='/create'>
            <Menu.Item header active={isActive('/create')}>
              <Icon name='add square' size='large' />
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href='/account'>
              <Menu.Item header active={isActive('/account')}>
                <Icon name='user' size='large' />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item header>
              <Icon name='sign out' size='large' />
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link href='/login'>
              <Menu.Item header active={isActive('/login')}>
                <Icon name='sign in' size='large' />
                Login
              </Menu.Item>
            </Link>

            <Link href='/signup'>
              <Menu.Item header active={isActive('/signup')}>
                <Icon name='signup' size='large' />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
};

export default Header;
