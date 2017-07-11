import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessForm from './guess-form'

describe('<GuessForm />', function() {
    it('should render without crashing', function() {
        shallow(<GuessForm />)
    });

    it('should execute callback when onGuess is triggered', function() {
        const callback = jest.fn()
        const wrapper = mount(<GuessForm onGuess={callback}/>)
        const instance = wrapper.instance()
        instance.onGuess(new Event('submit'))
        expect(callback).toHaveBeenCalled()
    });
});
