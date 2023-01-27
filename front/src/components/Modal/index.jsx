import PropTypes from 'prop-types';
import * as Styled from './styles';
import Button from '../Button';
import trashcan from '../../assets/images/icon/trashcan.svg';
import ReactPortal from '../ReactPortal';

export default function Modal({ danger }) {
  return (
    <ReactPortal containerId="modal-root">
      <Styled.Overlay>
        <Styled.Container danger={danger}>
          <h1>Modal Title</h1>
          <p>Modal Body</p>

          <Styled.Footer>
            <button type="button" className="cancelBtn">
              Cancel
            </button>
            <Button type="button" danger={danger}>
              Delete
              <img src={trashcan} alt="trashcan" className="trashDelete" />
            </Button>
          </Styled.Footer>
        </Styled.Container>
      </Styled.Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
