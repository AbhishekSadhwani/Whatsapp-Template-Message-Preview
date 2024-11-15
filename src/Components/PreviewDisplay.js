import { FaExternalLinkAlt } from "react-icons/fa";


// Component for Message Preview
export const PreviewDisplay = ({ preview, variables }) => {
  return (
    <div className="bg-[#efeae2] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#008069] text-white p-4">
          <h1 className="text-xl font-semibold">Message Preview</h1>
        </div>
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-[url('https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3')]">
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-[#dcf8c6] rounded-lg shadow"> 
                <div className="p-2">
                  {/* accessing preview passed as prop */}
                  <p className="whitespace-pre-line text-gray-800">{preview || 'Your preview will appear here...'}</p>
                </div>
                {/*if preview is available then showing tracking button and passing the the tracking 
                link generated using orderNumber otherwise not*/}
                {preview && <div className="flex items-center justify-center border-t border-slate-400 mt-2 p-2">
                              <a className="flex items-center text-md text-black hover:text-blue-900 font-medium" href={`www.xyz_company.com/`+ variables.OrderNumber}><span className="mr-1"><FaExternalLinkAlt /></span>Track on app</a>
                            </div>
                }    
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

