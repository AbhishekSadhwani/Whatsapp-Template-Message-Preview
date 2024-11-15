import { useState, useEffect } from 'react';
import { PreviewDisplay, TemplateSelector, VariableInput } from './Components';


function App() {
  // state variables to handle templates, selectedTemplate, Variables, Preview 
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [variables, setVariables] = useState({});
  const [preview, setPreview] = useState('');

  // Fetch templates from backend and store in the templates state variable
  useEffect(() => {

    const fetchData = async () => {
      try{
          const response = await fetch(`${process.env.REACT_APP_API_HOST}api/templates`);
          if (!response.ok){
              throw new Error("Error fetching templates: "+ response.statusText);
          }
          const data =  await response.json();
          setTemplates(data);
      }
      catch(error){
         console.log(error);
      }
    };

    fetchData();
  }, []);

  /* 
    --> Fetching Preview from the API using a Post request passing the selected template id and 
    the variable values entered by user 
    --> Using useEffect so that as soon as there is chage in value of template or variables 
    data new preview is generated and rendered
  */
  useEffect(() => {
    const fetchPreview = async () => {
      const requestData = {
        method: "POST",
        body: JSON.stringify({
          templateId: selectedTemplate.id,
          variables
        }),
        headers: {
          "Content-type": "application/json"
        }
      
      };
      try{
        const response = await fetch(`${process.env.REACT_APP_API_HOST}api/preview`, requestData);
        
        if(!response.ok){
          throw new Error("Error fetching templates: "+ response.statusText);
        }else{
          const data = await response.json();
          setPreview(data.preview);
        };
      }catch(error){
        console.log(error);
      }
    };

    if (selectedTemplate) {
      fetchPreview();
    }
  }, [selectedTemplate, variables]);



  // function to handle selection of template
  const handleTemplateSelect = (e) => {
    // accessing template id from the select element
    const templateId = parseInt(e.target.value);
    // finding the template id in the templates list
    const template = templates.find(t => t.id === templateId);
    setSelectedTemplate(template);
    setVariables({});
    setPreview('');
  };

  // function to set variable values based on data entered by user
  // the function will be called on input element using onChange so it will update as soon as input value is changed
  const handleVariableChange = (e) => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
  };


  return(
  <div className="flex flex-col items-center min-h-screen bg-black p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-6">WhatsApp Template Preview</h1>
      <div className="flex flex-wrap justify-around gap-10 bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
        <div className='w-full md:w-1/3'>
          
          {/* 
              using the TemplateSelector component and passing the template list, selectedTemplate 
              and handleTemplateSelect function as prop 
          */}
          
          <TemplateSelector
            templates={templates}
            selectedTemplate={selectedTemplate}
            onSelect={handleTemplateSelect}
          />

          {/* 
            if there is any value for selectedTemplate then we display the input fields
            and passing selectedTemplate to generate field accessing it template, and 
            handleVaribaleChange function to handle user input.
          */}
          {selectedTemplate && (
            <div className="mt-4">
              <VariableInput
                selectedTemplate={selectedTemplate}
                variables={variables}
                onVariablesChange={handleVariableChange}
                setVariables={setVariables}
              />
            </div>
          )}
        </div>
        <div className='flex-1'>
          {/* Rendering PreviewDisplay component and passing the preview generated and received from API and Variables */}
          <PreviewDisplay preview={preview} variables={variables} />
        </div>
      </div>
    </div>
  );

}

export default App;
