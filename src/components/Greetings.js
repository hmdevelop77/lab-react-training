function Greetings(props) {

  if (props.lang === 'de') {
    return <div className="border-name">Hallo {props.children}</div>;
  } else if (props.lang === 'en') {
    return <div className="border-name">hello {props.children}</div>;
  } else if (props.lang === 'es') {
    return <div className="border-name">hola {props.children}</div>;
  } else {
    return <div className="border-name">bonjour {props.children}</div>;
  }

}

export default Greetings;
