import * as React from "react"
import { PageProps, Link } from "gatsby"

type Props = {
  title: string
  location: Location
}

const Layout: React.FC<Props> = ({ children }) => {

  return (
    <div>
      <main>{children}</main>
      <footer>
      </footer>
    </div>
  )
}

export default Layout
