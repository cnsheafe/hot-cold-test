import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessList from './guess-list'

describe('<GuessList />', function() {
    it('should render without crashing', function() {
        shallow(<GuessList guesses={[1,2,3,5]} />)
    })
});
