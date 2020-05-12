import React from 'react';
import { useModal } from './useModal';

const App = React.memo(() => {
    const { show, hide, RenderModal } = useModal();
    return (
        <div>
            <div>
                <p>something...</p>
                <button onClick={show}>open</button>
                <button onClick={hide}>close</button>
                <RenderModal>
                    <p>things here will be rendered into 'modal-root'</p>
                </RenderModal>
            </div>
            <div id='modal-root' />
        </div>
    )
});

export default App;