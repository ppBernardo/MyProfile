import './style.css'
import Radio from '../nav';
import Bio from '../mybio';

function Profile() {

  return (
    <div className='page'>
      <div className='header'>
        <h1></h1>
      </div>
      <div className='body'>
        <div className='navigation'>
          <Radio></Radio>
        </div>

        <div className='conteudo'>
          <Bio></Bio>
        </div>
      </div>
    </div>
  );
}

export default Profile