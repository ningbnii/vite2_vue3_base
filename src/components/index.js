import { Layout, Header, Aside, Content, Footer } from './layout'
import Avatar from './avatar'
import { Col, Row } from 'vant'
import Button from './button'
import Launch from './launch'
import BoxSkin from './box-skin'
import Columns from './columns'
import {
  SvgCheck,
  SvgSearch,
  SvgButton,
  SvgHome,
  SvgMore,
  SvgStar,
  SvgTheme,
  SvgThumbs,
  SvgShare,
  SvgLeft,
  SvgTips,
} from './svg-icon'
import Search from './search'
import FootNav from './foot-nav'

const components = {
  Avatar,
  Layout,
  Header,
  Aside,
  Content,
  Footer,
  Col,
  Row,
  Button,
  Launch,
  BoxSkin,
  Columns,
  SvgCheck,
  SvgSearch,
  SvgButton,
  SvgHome,
  SvgMore,
  SvgStar,
  SvgTheme,
  SvgThumbs,
  SvgShare,
  SvgLeft,
  SvgTips,
  Search,
  FootNav,
}

const install = (app) => {
  Object.keys(components).forEach((key) => {
    app.component(components[key]['name'], components[key])
  })
}

const Mui = { install }

export default Mui
