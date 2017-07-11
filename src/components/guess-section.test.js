import React from 'react'
import {shallow, mount} from 'enzyme'
import GuessSection from './guess-section'

describe('<GuessSection />', function() {
    it('should render without crashing', function() {
        <GuessSection feedback={'hello'} onGuess={'bye'} />
    })
});
