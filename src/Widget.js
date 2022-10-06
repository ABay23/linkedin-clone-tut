import './Widget.css';
import { FiberManualRecord, Info } from '@mui/icons-material';

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className='widget__article'>
      <div className='widget__articleLeft'>
        <FiberManualRecord />
      </div>
      <div className='widget__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widget'>
      <div className='widget__header'>
        <h2>LinkedIn News</h2>

        <Info />
      </div>
      {newsArticle('Test for News article', 'Top News - 9000 readers')}
      {newsArticle('Test for News article2', 'Top News - 9000 readers')}
      {newsArticle('Test for News article3', 'Top News - 9000 readers')}
    </div>
  );
}

export default Widget;
