import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Page, useTheme } from '@zeit-ui/react'
import { styled } from 'linaria/react'

type Props = {
  children?: ReactNode
  title?: string
}

type PageHeaderProps = {
  backgroundColor: string
}

const PageHeader = styled(Page.Header)<PageHeaderProps>`
  background-color: ${props => props.backgroundColor};
`

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { palette } = useTheme()

  return (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Page size="medium">
      <PageHeader backgroundColor={palette.accents_2}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
        </nav>
      </PageHeader>
      <Page.Content>
        {children}
      </Page.Content>
      <Page.Footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </Page.Footer>
    </Page>
  </div>
)}

export default Layout
