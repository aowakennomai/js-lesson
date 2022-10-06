import React from 'react';
import { createRoot } from 'react-dom/client';

const MyComponent = () => {
	return <div>
		Hello world!!!
	</div>;
};

const root = createRoot(document.body);
root.render(<MyComponent />);