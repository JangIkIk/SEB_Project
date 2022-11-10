import logo from "../static/images/logo_white.png"
const Header = () => {
    return (
  <header><img src={logo} style={{"width":"120px"}} alt="#"/><div style={{'font-size': '2.2rem', "color":"white"}}>웹 표준 & 웹 접근성</div></header>
    )

}

export default Header