// Template Selector Component

export const TemplateSelector = ({ templates, selectedTemplate, onSelect }) => {
  return (

    <select data-testid="dropDown" className='p-1 border border-slate-800 rounded-lg outline-none' onChange={onSelect} value={selectedTemplate ? selectedTemplate.id : ''}>
      <option value="">-- Choose a Template --</option>
      {/* genrating options based on the templates list received from the backend */}
      {templates.map(template => (
        <option key={template.id} value={template.id}>{template.name}</option>
      ))}
    </select>
  );
};
