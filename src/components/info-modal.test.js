import React from 'react'
import {shallow} from 'enzyme'

import InfoModal from './info-modal'

describe('<InfoModal />', function() {
    it('should render without crashing', function() {
        shallow(<InfoModal />)
    });
});
