const Header = () => {
	return (
		<div className="headings" style={hStyle}>
		  <p className="display-3 fw-normal" style={{ color:'red' }}>Notesup </p>
		  {/*<sup>up</sup>*/}
		  <figcaption className="blockquote-footer ps-5">
    Don't just rely on memory
  </figcaption>
		  
		</div>
	);
}

const hStyle = {
	marginTop: '1em',
	textAlign: 'center'

}

export default Header;