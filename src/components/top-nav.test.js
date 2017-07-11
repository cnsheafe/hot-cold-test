import React from 'react'
import {shallow, mount} from 'enzyme'

import TopNav from './top-nav'

describe('<TopNav />', function() {
    it('should render without crashing', function() {
        shallow(<TopNav />)
    });
    it('should trigger callback onClick', function() {
        const callback = jest.fn()

        const wrapper = mount(<TopNav onInfo={callback} onNewGame={callback} />)
        wrapper.find('.what').simulate('click')
        expect(callback).toHaveBeenCalled()
        wrapper.find('.what').simulate('click')
        expect(callback).toHaveBeenCalled()
    })
    
});
