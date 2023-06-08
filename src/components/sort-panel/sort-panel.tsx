import ContainerBorder from '../../containers/container-border/container-border';
import style from './sort-panel.module.css';

const SortPanel: React.FC = () => {
  return (
    <ContainerBorder>
      <div className={style['sort-panel']}>SortPanel</div>
    </ContainerBorder>
  );
};

export default SortPanel;
