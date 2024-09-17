// /components/TeamHeader.js

const TeamHeader = ({ name, mainColor, secondColor }) => {
    const headerStyle = {
      backgroundColor: mainColor,  // Team's main color for background
      color: secondColor,          // Team's second color for text
      padding: '20px',
      textAlign: 'center'
    };
  
    return (
      <header style={headerStyle}>
        <h1>{name}</h1>
      </header>
    );
  };
  
  export default TeamHeader;
  