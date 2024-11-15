// Component to generate input field based on the variables received from the template

export const VariableInput = ({ selectedTemplate, variables, onVariablesChange, setVariables }) => {
  // accessing the varibales from the template using the regex pattern which checks for all values inside the {{}} brackets from the template string
  const matches = selectedTemplate.template.match(/{{(.*?)}}/g) || [];
  return (
    <div className='w-full'>
      <h2 className="text-lg font-medium text-gray-800 mb-2">Variables</h2>
      {/* generating input field for all the values extracted from the template string */}
      {matches.map((match, index) => {
        const variable = match.replace(/[{}]/g, '');
        return (
          <div key={index} className="mb-2">
            <label htmlFor={variable} className="block text-gray-700">{variable}</label>
            <input
              type="text"
              id={variable}
              name={variable}
              value={variables[variable] || ''}
              onChange={onVariablesChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      })}
      
      <button onClick={() => setVariables({})} className="px-2 py-1 rounded-md mt-5 bg-black text-white ">Reset</button>
    </div>
  );
};


