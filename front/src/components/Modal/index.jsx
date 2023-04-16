import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Button } from '../Button';
import ReactPortal from '../ReactPortal';

export default function Modal({
  danger,
  title,
  children,
  visible,
  confirmLabel,
  cancelLabel,
  onCancel,
  onConfirm,
  isLoading,
}) {
  // This controls the visibility of the modal
  // A prop is being passed here so that we can control the modal here
  // Not in the components we use it
  if (!visible) {
    return null;
  }
  return (
    <ReactPortal containerId="modal-root">
      <Styled.Overlay>
        <Styled.Container danger={danger}>
          <h1>{title}</h1>
          <div className="modal-body">
            {children}
          </div>
          <Styled.Footer>
            <button
              type="button"
              className="cancelBtn"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
              isLoading={isLoading}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </Styled.Footer>
        </Styled.Container>
      </Styled.Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  isLoading: false,
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
};
