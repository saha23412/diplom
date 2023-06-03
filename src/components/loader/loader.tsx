import ContentLoader from 'react-content-loader';
import ContainerWidth from '../../containers/container-width/container-width';

const MyLoader: React.FC = () => (
  <div
    style={{
      paddingTop: '25px',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}
  >
    <ContainerWidth>
      <ContentLoader
        speed={1}
        width={350}
        height={300}
        viewBox="0 0 350 300"
        backgroundColor="#e6e6e6"
        foregroundColor="#c7c7c7"
      >
        <rect x="145" y="110" rx="3" ry="3" width="316" height="15" />
        <rect x="122" y="113" rx="0" ry="0" width="1" height="0" />
        <rect x="145" y="55" rx="3" ry="3" width="310" height="15" />
        <circle cx="68" cy="120" r="70" />
        <rect x="145" y="165" rx="3" ry="3" width="320" height="15" />
        <rect x="8" y="11" rx="3" ry="3" width="450" height="15" />
        <rect x="7" y="225" rx="3" ry="3" width="450" height="15" />
      </ContentLoader>
    </ContainerWidth>
  </div>
);

export default MyLoader;
