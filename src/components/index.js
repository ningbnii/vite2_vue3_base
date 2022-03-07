import { Layout, Header, Aside, Main, Footer } from './layout'
import { Button, Col, Row } from 'vant'

const components = {
  Layout,
  Header,
  Aside,
  Main,
  Footer,
  Button,
  Col,
  Row,
}

const install = (app) => {
  Object.keys(components).forEach((key) => {
    app.component(components[key]['name'], components[key])
  })
}

const Mui = { install }

export default Mui
