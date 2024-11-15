import { fireEvent, render, screen} from '@testing-library/react';
import {VariableInput} from '../VariableInput';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


describe("Testing VariableInput Component", () => {
    // mock data for testing
    const variables = {name:''};
    const template = {id: 1, name: 'Order Confirmation', template:"Hi {{name}}! Your order is confirmed."};
    const onVariablesChangeMock = jest.fn();


    test('Test for input Fields', () => {
        
        render(
            <VariableInput
            selectedTemplate={template}
            variables={variables}
            onVariablesChange={onVariablesChangeMock}
            />
        );
    
        // Check if input field is rendered
        expect(screen.getByLabelText('name')).toBeInTheDocument;
    });

});

