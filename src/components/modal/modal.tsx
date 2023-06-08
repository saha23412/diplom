import useMount from '../../hooks/use-mount';
import { LayoutModalProps } from './layout-modal-types';
import LayoutModal from './layout/layout-modal';

const ComplexAnimatedModal: React.FC<LayoutModalProps> = ({
  opened,
  onClose,
  children,
}) => {
  const { mounted } = useMount(opened);

  if (!mounted) {
    return null;
  }

  return (
    <LayoutModal onClose={onClose} opened={opened}>
      {children}
    </LayoutModal>
  );
};
export default ComplexAnimatedModal;
