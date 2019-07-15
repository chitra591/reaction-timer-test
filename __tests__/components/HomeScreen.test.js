import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import HomeContainer from '../../js/home/components/HomeContainer';
import Button from '../../js/common/Button';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    scoreCard: {
        scores: [],
        average: 0.00
    }
}

describe('Testing HomeScreen', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <HomeContainer store={mockStore(initialState)} />,);
        expect(wrapper.dive()).toMatchSnapshot();
    });
});

describe('Text', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<Button label={"test label"} primary />)
            expect(component).toMatchSnapshot("Primary button snapshot")
        });
        it('should match to snapshot - Secondary', () => {
            const component = shallow(<Button label={"test label"} primary={false} />)
            expect(component).toMatchSnapshot("Secondary button snapshot")
        });
    });
    describe('Interaction', () => {
        describe('onPressHandler', () => {
            it('should call onPress', () => {
                const mockOnPress = jest.fn();      
                const component = shallow(<Button 
                    label= "test label" 
                    onPress={mockOnPress}       
                />);
                const instance = component.instance();  
                
                instance.onPressHandler();         
                expect(mockOnPress).toHaveBeenCalled();
                expect(mockOnPress).toHaveBeenCalledTimes(1);   
            });
        });
    });
});