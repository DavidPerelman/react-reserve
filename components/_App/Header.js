import Link from 'next/link';
import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import logo from '../../static/logo.svg';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  const user = false;

  return (
    <Menu fluid id={styles.menu} inverted>
      <Container text>
        <Link href='/'>
          <Menu.Item header>
            <Image
              width={35}
              height={29}
              src={logo}
              alt='fd'
              style={{
                marginRight: '1rem',
              }}
            />
            ReactReserve
          </Menu.Item>
        </Link>

        <Link href='/cart'>
          <Menu.Item header>
            <Icon name='cart' size='large' />
            Cart
          </Menu.Item>
        </Link>

        {user && (
          <Link href='/create'>
            <Menu.Item header>
              <Icon name='add square' size='large' />
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href='/account'>
              <Menu.Item header>
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
              <Menu.Item header>
                <Icon name='sign in' size='large' />
                Login
              </Menu.Item>
            </Link>

            <Link href='/signup'>
              <Menu.Item header>
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
