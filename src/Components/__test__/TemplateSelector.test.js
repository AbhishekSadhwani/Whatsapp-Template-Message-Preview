import { screen, render, fireEvent } from "@testing-library/react";
import {TemplateSelector} from '../TemplateSelector';

describe("Template Selector Test",()=> {
    // mock template data
    const templates = [
        { id: 1, name: 'Order Confirmation' },
        { id: 2, name: 'Appointment Reminder' },
        ];
    
    const onSelectMock = jest.fn();
    
    test('rendering dropDown with templates', () => {
        render(<TemplateSelector templates={templates} selectedTemplate={templates[0]} onSelect={onSelectMock} />);
        const dropdown = screen.getByTestId('dropDown');
        expect(dropdown).toBeInTheDocument;
        expect(screen.getByText('Order Confirmation')).toBeInTheDocument;
    });

    test('testing selection of Template', () => {
        // mock template data
        render(<TemplateSelector templates={templates} selectedTemplate={templates[0]} onSelect={onSelectMock} />);
        const dropdown = screen.getByTestId('dropDown');
        fireEvent.change(dropdown, { target: { value: '2' } });
        expect(onSelectMock).toHaveBeenCalled();
    });

});