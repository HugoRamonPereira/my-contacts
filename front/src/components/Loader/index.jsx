import * as Styled from './styles';
import ReactPortal from '../ReactPortal';

export default function Loader() {
  return (
    <ReactPortal containerId="loader-root">
      <Styled.Overlay>
        <div className="loader" />
      </Styled.Overlay>
    </ReactPortal>
  );
}
