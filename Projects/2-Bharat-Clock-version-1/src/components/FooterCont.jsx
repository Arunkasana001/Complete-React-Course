function Footer(){

  let time = new Date();
  return ( <h3>This is the Curretnt time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
</h3>)
      }
export default Footer;