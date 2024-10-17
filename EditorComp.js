import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const EditorComponent = ({ setMatchesList }) => {
  const handleEditorChange = (content) => {
    const matchedPatterns = [];

    // Use regex to match patterns inside {{ }}
    content.replace(/{{(.*?)}}/g, (match, p1) => {
      matchedPatterns.push(p1); 
    });

    setMatchesList(matchedPatterns); // Send matches to parent component
  };

  return (
    <div>
    
      <Editor
        apiKey="sxfb1ugl3efguz2jdb5y17eo40baoj2p2k96vd0qqgpuine7"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'image media link tinydrive code editimage lists'
          ],
          toolbar: `undo redo | formatselect | bold italic backcolor |
                    alignleft aligncenter alignright alignjustify |
                    bullist numlist outdent indent | removeformat | help | insertfile image link | code`
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default EditorComponent;
