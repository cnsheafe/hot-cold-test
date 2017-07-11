import React from 'react'
import {shallow, mount} from 'enzyme'

import Header from './header'
import InfoModal from './info-modal'
import TopNav from './top-nav'

describe('<Header/>', function() {
    it('Renders without crashing', () => {
        shallow(<Header />)
    })

    it('changes infoModal via toggle', () => {
        const wrapper = mount(<Header />)
        const instance = wrapper.instance()
        instance.toggleInfoModal()
        expect(instance.state.showInfoModal).toEqual(true)
    })
    it('renders TopNav', () => {
        const wrapper = shallow(<Header onNewGame={'hello'}/>).find('TopNav')
        expect(wrapper.exists()).toEqual(true)
        console.log(wrapper.props())
        expect(wrapper.prop('onInfo')).toEqual(expect.anything())
        expect(wrapper.prop('onNewGame')).toEqual(expect.anything())
    })
});
