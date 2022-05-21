import imgData from '../../Data/weaponsData'
import './style.css'
function WeaponsContainer() {
    return <div className="weapons-container">
      <div className="weapons-icons">
        {imgData.map((img,index) => {
          return (
            <li className="weapons-icon" key={index}>
              <img src={img.link} alt="tech" />
            </li>
          );
        })}
      </div>
    </div>;
  }

  export default WeaponsContainer