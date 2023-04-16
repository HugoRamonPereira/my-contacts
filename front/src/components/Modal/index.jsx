import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Button } from '../Button';
import ReactPortal from '../ReactPortal';

export default function Modal({
  danger, title, children, confirmLabel, cancelLabel, onCancel, onConfirm,
}) {
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
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
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
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
};
