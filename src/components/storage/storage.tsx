import { StorageProps } from './storage-types';

const Storage: React.FC<StorageProps> = ({ storage }) => {
  return (
    <div>
      {storage.map((inventory) => (
        <>
          <div>{inventory.title}</div>
          <div>{inventory.amount}</div>
          <div>{inventory.description}</div>
        </>
      ))}
    </div>
  );
};

export default Storage;
